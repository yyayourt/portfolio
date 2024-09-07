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
  url: { type: String },
  previewImage: { type: String, required: true },
  technologies: { type: [String], required: true },
});

// Vérifiez si le modèle existe déjà pour éviter les erreurs de redéfinition
const Project = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
