'use client';

import { useEffect, useState } from 'react';
import { fetchSchools } from '@/lib/data';
import SchoolDetailsComponent from '@/components/data-display/school-details'; // Renommez-le en fonction de votre composant réel
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import type { SchoolDetails as SchoolDetailsType } from '@/lib/types';

const SchoolSection = () => {
  const [schools, setSchools] = useState<SchoolDetailsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSchools = async () => {
      try {
        const schoolData = await fetchSchools();
        setSchools(schoolData);
      } finally {
        setLoading(false);
      }
    };

    loadSchools();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="bg-gray-50" id="School">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Schools" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Voici un résumé de mes formations :
        </Typography>
      </div>

      {schools.map((school, index) => (
        <SchoolDetailsComponent {...school} key={index} />
      ))}
    </Container>
  );
};

export default SchoolSection;
