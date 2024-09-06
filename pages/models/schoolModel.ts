import mongoose, { Schema, Document } from 'mongoose';

interface ISchool extends Document {
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

const School = mongoose.model<ISchool>('School', schoolSchema);

export default School;
