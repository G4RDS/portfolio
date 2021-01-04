import React from 'react';

import { SectionTitle } from 'components/SectionTitle';
import { skills } from 'data/skill';
import { SkillItem } from './SkillItem';

export const SkillsSection: React.FC = () => {
  return (
    <section className="mt-12">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-flow-col auto-cols-min gap-6">
        {skills.map((skill) => (
          <SkillItem {...skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};
