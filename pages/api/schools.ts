// pages/api/schools.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import School from '../models/schoolModel';

// Fonction pour se connecter à MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI!);
  }
}

// Route API pour récupérer les écoles
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const schools = await School.find({});
      res.status(200).json(schools);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch schools' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
