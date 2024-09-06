import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  logo: string;
  darkModeLogo?: string;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
}

const experienceSchema = new Schema<IExperience>({
  logo: { type: String, required: true },
  darkModeLogo: { type: String },
  logoAlt: { type: String, required: true },
  position: { type: String, required: true },
  currentlyWorkHere: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  summary: { type: [String], required: true },
});

const Experience = mongoose.model<IExperience>('Experience', experienceSchema);

export default Experience;
