import express from 'express'
import joi from 'joi'
import memos from '../schemas/memo_list.js'


const router = express.Router();
const createdtodoschema = joi.object(
    {
        value : joi.string().min(1).max(50).required(),
    }
)

// router.get('/todos', async (req, res)=>{
    
// })

//find : select
//new : insert 

router.get('/todos', async (req, res, next)=>{
    //해야할 일 목록 조회
    const todos = await memos.find().sort('-order').exec();
    console.log(todos);
    //목록을 클라이언트에 반환

    return res.status(200).json({todos})
})

//순서 변경 API
router.patch('/todos/:todoid', async (req, res, next) =>{
    const {todoid} = req.params;
    const {order, done, value} = req.body;
    
    const current_todo = await memos.findById(todoid).exec();
    if(!current_todo)
    {
        return res.status(404).json({errormassage : "존재하지 않음"});
    }

    if(order)
    {
        const targettodo = await memos.findOne({order}).exec();
        if(targettodo)
        {
            targettodo.order = current_todo.order;
            
            await targettodo.save();
        }
        current_todo.order = order;
    }

    if(done !== undefined)
    {
        current_todo.doneAt = done ? new Date() : null;
    }

    if(value)
    {
        current_todo.value = value;      
    }

    

    await current_todo.save();

    return res.status(200).json({current_todo});
});

router.delete('/todos/:todoid', async(req, res, next)=>{
    const {todoid} = req.params;
    
    const todo = await memos.findById(todoid).exec();
    if(!todo)
    {
        return res.status(404).json({errormassage : "찾을 수 없습니다"});
    }
     
    //언더바 아이디가 todo id라고 보면 되겠다.
    await memos.deleteOne({ _id : todoid});

    return res.status(200).json({});
})

//데이터베이스를 사용할 때는 중간에 멈출 수도 있기 때문에
//비동기로 작업을 하자.
router.post('/todos', async (req, res, next)=>{
    //const {value} = req.body;

    

    try{
        const validate = await createdtodoschema.validateAsync(req.body);
        const {value} = validate;

        if(!value)
            {
                return res.status(400).json({errormassage : "value 값이 존재하지 않음."})
            }
        
            //앞에 -를 붙이면 내리차순으로 정렬을 한다., 
            //exec를 붙이지 않으면 비동기로 전환되지 않는다.
            const todomaxorder = await memos.findOne().sort('-order').exec();
        
            //존재한다면 그 값 다음 값에, 없다면 1번에
            const order = todomaxorder ? todomaxorder.order + 1 : 1;
        
            //하나의 데이터를 생성한다.
            const todo = new memos({value, order});
            //데이터를 저장한다.
            await todo.save();
        
            return res.status(201).json({todo : todo});
    }
    catch(err)
    {
        console.error(err);
        

        if(err.name === "ValidationError")
        {
            return res.status(400).json({errormassage : err})
        }
        else
        {
            return res.status(500).json({errormassage : "서버에서 문제가 발생했습니다."})
        }
    }
    

    //만약 클라이언트가 value 데이터를 전달하지 않았을 때 에러 전달
    
})

export default router;