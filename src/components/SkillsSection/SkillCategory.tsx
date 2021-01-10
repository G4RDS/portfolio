import React from 'react';
import styled from '@xstyled/styled-components';

import { Skill } from 'consts/skill';
import { SkillItem } from './SkillItem';

interface Props {
  name: string;
  skills: Skill[];
}

export const SkillCategory: React.FC<Props> = ({ name, skills }) => {
  return (
    <Container>
      <SkillName>{name}</SkillName>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem {...skill} key={skill.name} />
        ))}
      </SkillList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 8 0;

  &:first-child {
    margin: 0;
  }
`;

const SkillName = styled.div`
  color: primary-600;
  font-size: xl;
  line-height: 1;
  font-weight: bold;
  font-style: italic;
  writing-mode: vertical-lr;
`;

const SkillList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-gap: 6;

  margin-left: 6;
`;
