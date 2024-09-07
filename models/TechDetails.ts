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

// Assurez-vous de vérifier s'il existe déjà pour éviter l'erreur de redéfinition
const TechDetails = mongoose.models.TechDetails || mongoose.model<ITechDetails>('TechDetails', TechDetailsSchema);

export default TechDetails;
