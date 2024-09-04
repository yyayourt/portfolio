import express from 'express';
import Experience from '../models/experienceModel';

const router = express.Router();

router.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch experiences' });
  }
});

export default router;
