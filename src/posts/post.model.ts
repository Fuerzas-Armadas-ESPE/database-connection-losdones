import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});
