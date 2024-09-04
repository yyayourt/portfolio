import mongoose from 'mongoose';
import dotenv from 'dotenv';
import School from './models/schoolModel';

dotenv.config();

const schools = [
  {
    formationName: 'OpenClassroom - Obtenu',
    endDate: new Date(2024, 9),
    summary: 'Formation Développeur Web',
  },
  {
    formationName: 'Lycée Dhuoda à Nîmes - Obtenu',
    endDate: new Date(2023, 6),
    summary: 'BTS Electrotechnique',
  },
  {
    formationName: 'I.U.T de Nîmes',
    endDate: new Date(2021, 6),
    summary: 'DUT science et génie des matériaux',
  },
  {
    formationName: 'Lycée Dhuoda à Nîmes - Obtenu',
    endDate: new Date(2020, 6),
    summary: 'Baccalauréat Scientifique : spécialité informatique et sciences du numérique',
  },
];

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Supprimer les données existantes dans la collection (facultatif)
    await School.deleteMany({});

    // Insérer les nouvelles données
    await School.insertMany(schools);

    console.log('School data successfully seeded!');
  } catch (error) {
    console.error('Error seeding school data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
