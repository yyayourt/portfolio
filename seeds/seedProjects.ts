import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/projectModel';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'your_mongo_connection_string';

const projects = [
  {
    name: 'Litoshi',
    description:
      "Un site web dédié à l'analyse de marché des tokens BRC-20, offrant également la possibilité de réaliser des transactions en toute simplicité.",
    url: '',
    previewImage: '/images/projectLitoshi.png',
    technologies: [
      'React',
      'Vite.js',
      'Express.js',
      'PostgreSQL',
      'Redux',
      'Chart.js'
    ],
  },
  {
    name: 'Encyclochain',
    description:
      "Encyclochain est une encyclopédie en ligne dédiée à la blockchain, offrant un accès à une vaste collection de ressources et d'informations actualisées sur les technologies décentralisées.",
    url: 'Encyclochain.com',
    previewImage: '/images/encyclochainProject.png',
    technologies: [
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Express.js',
      'Next.js',
      'MongoDB',
    ],
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
      await Project.deleteMany({});
  
      // Insérer les nouvelles données
      await Project.insertMany(projects);
  
      console.log('Data successfully seeded!');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      mongoose.connection.close();
    }
  };
  
  seedDatabase();