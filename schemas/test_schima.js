import mongoose from "mongoose";

const defaultSchema = new mongoose.Schema({
  defaultID: {
    type: Number,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Defaults", defaultSchema);

// /routes/goods.js
