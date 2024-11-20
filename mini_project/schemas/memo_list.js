import express from "express";
import mongoose from "mongoose";

const memos = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  doneAt: {
    type: Date,
    required: false,
  },
});

//프론트엔드 서빙을 위한 코드
memos.virtual("todoid").get(function () {
  return this._id.toHexString();
});

memos.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("memos", memos);
