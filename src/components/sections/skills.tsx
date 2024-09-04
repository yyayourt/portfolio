'use client';

import { useEffect, useState } from 'react';
import { fetchTechnologies } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import type { TechDetails as TechDetailsType } from '@/lib/types';

const SkillsSection = () => {
  const [technologies, setTechnologies] = useState<TechDetailsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const techData = await fetchTechnologies();
        setTechnologies(techData);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Les compétences, outils et technologies que je maîtrise parfaitement :
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {technologies.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
