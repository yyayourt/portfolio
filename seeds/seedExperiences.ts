// backend/src/seedExperiences.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Experience from '../models/experienceModel';

dotenv.config();

const experiences = [
  {
    logo: '/images/logos/logo-W3B.png',
    logoAlt: 'W3B Consulting',
    position: 'W3B Consulting',
    startDate: new Date(2023, 10),
    currentlyWorkHere: true,
    summary: [
      'Réalisation de deux sites web orientés sur la Blockchain.',
      'Suivi et intégration des maquettes graphiques pour les sites développés.',
      "Collaboration avec l'équipe UX/UI pour améliorer l'expérience utilisateur",
    ],
  },
  // Ajoutez d'autres expériences ici si nécessaire
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
    await Experience.deleteMany({});

    // Insérer les nouvelles données
    await Experience.insertMany(experiences);

    console.log('Data successfully seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
