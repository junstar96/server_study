// function solution(n, lost, reserve) {
//   var answer = n;
//   lost.sort((a,b)=>a-b);
//   let reserver_set = new Set();



  
//   reserve.forEach((data)=>{
//       reserver_set.add(data);
//   })
  

  
//   lost.forEach((data)=>{
//       if(reserver_set.has(data - 1))
//       {
//           reserver_set.delete(data- 1);
//       }
//       else if(reserver_set.has(data + 1))
//       {
//           reserver_set.delete(data+1);
//       }
//       else
//       {
//           answer -= 1;
//       }
//   })
  
//   return answer;
// }

// console.log(solution(3,	[3],	[1]));

let cot = [1,3,5].filter(x=>x>2);
console.log(cot);