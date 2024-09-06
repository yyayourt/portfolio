// pages/api/experiences.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Experience from '../models/experienceModel';

// Fonction pour se connecter à MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI!);
  }
}

// Route API pour récupérer les expériences
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const experiences = await Experience.find({});
      res.status(200).json(experiences);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch experiences' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
