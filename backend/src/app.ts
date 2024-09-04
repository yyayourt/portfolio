import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import techRoutes from './routes/techRoutes';
import projectRoutes from './routes/projectRoutes';
import experienceRoutes from './routes/experienceRoutes';
import schoolRoutes from './routes/schoolRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});
app.use('/api', techRoutes);
app.use('/api', projectRoutes);
app.use(experienceRoutes);
app.use(schoolRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



  