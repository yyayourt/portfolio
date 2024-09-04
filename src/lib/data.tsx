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

export async function fetchTechnologies(): Promise<TechDetails[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies`);
  if (!response.ok) {
    throw new Error('Failed to fetch technologies');
  }
  return await response.json();
}

export async function fetchExperiences(): Promise<ExperienceDetails[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences`);
  if (!response.ok) {
    throw new Error('Failed to fetch experiences');
  }
  return await response.json();
}

export async function fetchProjects(): Promise<ProjectDetails[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await response.json();
}

export async function fetchSchools(): Promise<SchoolDetails[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schools`);
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
