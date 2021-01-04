import React from 'react';

import { SectionTitle } from 'components/SectionTitle';
import { skillCategories } from 'data/skill';
import { SkillCategory } from './SkillCategory';

export const SkillsSection: React.FC = () => {
  return (
    <section className="mt-12">
      <SectionTitle>Skills</SectionTitle>
      <div className="mt-8">
        {skillCategories.map((category) => (
          <SkillCategory {...category} key={category.name} />
        ))}
      </div>
    </section>
  );
};
