import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import TechDetails from '../../models/TechDetails';

// Fonction pour se connecter à MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI!);
  }
}

// Route API pour récupérer les technologies
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const technologies = await TechDetails.find({});
      res.status(200).json(technologies);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch technologies' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
