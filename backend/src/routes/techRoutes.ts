import { Router } from 'express';
import { TechDetails } from '../models/TechDetails';

const router = Router();

router.get('/technologies', async (req, res) => {
  try {
    const technologies = await TechDetails.find();
    res.json(technologies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load technologies' });
  }
});

export default router;
