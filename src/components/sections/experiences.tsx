'use client';

import { useEffect, useState } from 'react';
import { fetchExperiences } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import type { ExperienceDetails as ExperienceDetailsType } from '@/lib/types';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<ExperienceDetailsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const experienceData = await fetchExperiences();
        setExperiences(experienceData);
      } catch (error) {
        setError('Failed to load experiences');
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Voici un résumé rapide de mes expériences les plus récentes :
        </Typography>
      </div>

      {experiences.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
