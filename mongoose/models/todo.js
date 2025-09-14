import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title : String,
        desc : String,
        isDone : Boolean,
        days: Number,
    }
)

export const todo = mongoose.model('Todo', todoSchema)



