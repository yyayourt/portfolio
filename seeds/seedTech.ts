import mongoose from 'mongoose';
import { TechDetails } from '../models/TechDetails';
import dotenv from 'dotenv';

dotenv.config({ path: 'C:/Users/yanis/Desktop/portfolio/backend/.env' });

console.log('MONGO_URI:', process.env.MONGO_URI);

const techData = [
  {
    label: 'Javascript',
    logo: '/images/logos/icon-javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: '/images/logos/icon-typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: '/images/logos/icon-react.svg',
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: '/images/logos/icon-nextjs.svg',
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: '/images/logos/icon-nodejs.svg',
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: '/images/logos/icon-express.svg',
    darkModeLogo: '/images/logos/icon-express-light.svg',
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: '/images/logos/icon-mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: '/images/logos/icon-sass.svg',
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: '/images/logos/icon-tailwindcss.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: '/images/logos/icon-figma.svg',
    url: 'https://www.figma.com/',
  },
  {
    label: 'Git',
    logo: '/images/logos/icon-git.svg',
    url: 'https://git-scm.com/',
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
      await TechDetails.deleteMany({});
  
      // Insérer les nouvelles données
      await TechDetails.insertMany(techData);
  
      console.log('Data successfully seeded!');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      mongoose.connection.close();
    }
  };
  
  seedDatabase();