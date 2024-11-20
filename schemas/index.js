// /schemas/index.js

import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://jemuras1010:gowjfhdnjf12!@closter0.ofp3n.mongodb.net/?retryWrites=true&w=majority&appName=closter0",
      {
        dbName: "spa_mall", // spa_mall 데이터베이스명을 사용합니다.
      },
    )
    .catch((err) => console.log(err))
    .then(() => console.log("몽고디비 연결 성공"));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

export default connect;
