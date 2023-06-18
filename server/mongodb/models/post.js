import mongoose from "mongoose";
//mongoose is a popular mongodb object modelling tool for nodejs. It allow us to define schema and model and interact with mongoDB database
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
