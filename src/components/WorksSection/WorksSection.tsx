import React from 'react';
import { x } from '@xstyled/styled-components';

import { works } from 'data/work';
import { SectionTitle } from 'components/SectionTitle';
import { WorkItem } from './WorkItem';

export const WorksSection: React.FC = () => {
  return (
    <x.section mt={12}>
      <SectionTitle>Works</SectionTitle>
      <x.div display="grid" gridTemplateColumns={2} gap={8} mt={8}>
        {works.map((work) => (
          <WorkItem {...work} key={work.id} />
        ))}
      </x.div>
    </x.section>
  );
};
