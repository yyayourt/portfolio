import express from 'express';
import School from '../models/schoolModel';

const router = express.Router();

// Route pour récupérer toutes les écoles
router.get('/api/schools', async (req, res) => {
  try {
    const schools = await School.find({});
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch schools' });
  }
});

export default router;
