import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  url: string;
  previewImage: string;
  technologies: string[];
}

const ProjectSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: false },
  previewImage: { type: String, required: true },
  technologies: { type: [String], required: true },
});

export default mongoose.model<IProject>('Project', ProjectSchema);
