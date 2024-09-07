import mongoose, { Schema, Document } from 'mongoose';

export interface ISchool extends Document {
  formationName: string;
  endDate?: Date;
  currentlyWorkHere?: boolean;
  summary: string;
}

const schoolSchema: Schema = new Schema({
  formationName: { type: String, required: true },
  endDate: { type: Date },
  currentlyWorkHere: { type: Boolean, default: false },
  summary: { type: String, required: true },
});

// Vérifiez si le modèle existe déjà pour éviter les erreurs de redéfinition
const School = mongoose.models.School || mongoose.model<ISchool>('School', schoolSchema);

export default School;
