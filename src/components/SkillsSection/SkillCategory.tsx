import React from 'react';

import { Skill } from 'consts/skill';
import { SkillItem } from './SkillItem';

interface Props {
  name: string;
  skills: Skill[];
}

export const SkillCategory: React.FC<Props> = ({ name, skills }) => {
  return (
    <div className="flex items-center mt-8 first:mt-0">
      <div
        className="text-xl text-blue-600 font-bold italic leading-none"
        style={{ writingMode: 'vertical-lr' }}
      >
        {name}
      </div>
      <div className="grid grid-flow-col auto-cols-min gap-6 ml-6">
        {skills.map((skill) => (
          <SkillItem {...skill} key={skill.name} />
        ))}
      </div>
    </div>
  );
};
