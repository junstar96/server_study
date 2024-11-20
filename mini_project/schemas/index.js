import express from "express";
import mongoose, { connect } from "mongoose";

const coonect = () => {
  mongoose
    .connect(
      "mongodb+srv://jemuras1010:gowjfhdnjf12!@closter0.ofp3n.mongodb.net/?retryWrites=true&w=majority&appName=closter0",
      {
        dbName: "todo_memo",
      },
    )
    .catch((err) => console.log("연결에 실패했습니다.", err))
    .then(() => console.log("몽고디비 연결 성공"));
};

mongoose.connection.on("error", () => {
  console.error("몽고디비 연결 에러", err);
});

export default coonect;
