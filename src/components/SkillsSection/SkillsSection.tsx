import React from 'react';
import { x } from '@xstyled/styled-components';

import { SectionTitle } from 'components/SectionTitle';
import { skillCategories } from 'data/skill';
import { SkillCategory } from './SkillCategory';

export const SkillsSection: React.FC = () => {
  return (
    <x.section mt={12}>
      <SectionTitle>Skills</SectionTitle>
      <x.div mt={8}>
        {skillCategories.map((category) => (
          <SkillCategory {...category} key={category.name} />
        ))}
      </x.div>
    </x.section>
  );
};
