import { Github, LinkedinIcon} from 'lucide-react';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  SchoolDetails,
} from '@/lib/types';


export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'School',
    href: '#School',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/yyayourt',
  },
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/yanis-nasri-0302281b6/',
  },
];

// Fichier: src/lib/data.tsx

// Appel pour récupérer les technologies
export async function fetchTechnologies() {
  const response = await fetch('/api/technologies');
  if (!response.ok) {
    throw new Error('Failed to fetch technologies');
  }
  return await response.json();
}

// Appel pour récupérer les expériences
export async function fetchExperiences() {
  const response = await fetch('/api/experiences');
  if (!response.ok) {
    throw new Error('Failed to fetch experiences');
  }
  const dataEx = await response.json();
  return dataEx.map((experience: any) => ({
    ...experience,
    startDate: experience.startDate ? new Date(experience.startDate) : undefined,
  }));
}

// Appel pour récupérer les projets
export async function fetchProjects() {
  const response = await fetch('/api/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await response.json();
}

// Appel pour récupérer les écoles
export async function fetchSchools() {
  const response = await fetch('/api/schools');
  if (!response.ok) {
    throw new Error('Failed to fetch schools');
  }
  
  const data = await response.json();

  // Assurez-vous que les dates sont bien des objets Date
  return data.map((school: any) => ({
    ...school,
    endDate: school.endDate ? new Date(school.endDate) : undefined,
  }));
}
