import React from 'react';

import { works } from 'data/work';
import { SectionTitle } from 'components/SectionTitle';
import { WorkItem } from './WorkItem';

export const WorksSection: React.FC = () => {
  return (
    <section className="mt-12">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {works.map((work) => (
          <WorkItem {...work} key={work.id} />
        ))}
      </div>
    </section>
  );
};
