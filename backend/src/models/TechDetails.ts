import mongoose, { Schema, Document } from 'mongoose';

export interface ITechDetails extends Document {
  label: string;
  logo: string;
  darkModeLogo?: string;
  url: string;
}

const TechDetailsSchema: Schema = new Schema({
  label: { type: String, required: true },
  logo: { type: String, required: true },
  darkModeLogo: { type: String },
  url: { type: String, required: true },
});

export const TechDetails = mongoose.model<ITechDetails>('TechDetails', TechDetailsSchema);
