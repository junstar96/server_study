//스키마(schema)는 컬렉션에 들어갈 문서가 어떤 값을 가지는지 정의한다.

//null : 존재하지 않는 필드
//sting : 문자열 ex : "mongodb"
//date : 날짜 ex : new Date()
//Buffet : 파일을 담을 수 있는 버퍼, UTF-8이 아닌 문자열 저장 
//ex : 0x65
//Boolean
//ObjectId : 객체 ID, 주로 다른 객체들 참조할 때 넣음
//ex : ObjectId()
//Array : 배열 형태 값

//export default를 사용할 거라면 위치 경로를 확실하게 적어줘야 하는 모양이다. 같은 파일에 위치하더라도 앞에 ./을 붙이자.