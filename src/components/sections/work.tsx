'use client';

import { useEffect, useState } from 'react';
import { fetchProjects } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import type { ProjectDetails as ProjectDetailsType } from '@/lib/types';

const WorkSection = () => {
  const [projects, setProjects] = useState<ProjectDetailsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await fetchProjects();
        setProjects(projectData);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Quelques projets marquants que j&apos;ai développés :
        </Typography>
      </div>

      {projects.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
