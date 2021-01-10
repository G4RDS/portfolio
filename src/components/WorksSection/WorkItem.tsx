import React from 'react';
import styled, { x } from '@xstyled/styled-components';

interface Props {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: string;
  tags: string[];
}

export const WorkItem: React.FC<Props> = ({
  imageUrl,
  imageAlt,
  name,
  description,
  tags,
}) => {
  return (
    <Container>
      <StyledImage src={imageUrl} alt={imageAlt} />
      <InfoWrapper>
        <div>
          <WorkName>{name}</WorkName>
          <WorkDescription>{description}</WorkDescription>
        </div>
        <x.div mt={3}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </x.div>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  border-radius: 3xl;

  background: white;
  box-shadow: lg;

  overflow: hidden;
`;

const StyledImage = styled.img`
  flex: 1;

  width: 0;
  max-width: 80;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 6;
`;

const WorkName = styled.h2`
  color: gray-700;
  font-size: 2xl;
  line-height: loose;
  font-weight: bold;
`;

const WorkDescription = styled.p`
  color: gray-600;
  margin-top: 3;
  font-size: base;
  line-height: 1.5rem;
`;

const Tag = styled.span`
  display: inline-block;

  height: 8;
  padding: 0 4;
  border-radius: 2xl;
  background-color: primary-500;

  color: white;
  font-weight: bold;
  line-height: 2rem;
`;
