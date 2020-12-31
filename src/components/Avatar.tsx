import React from 'react';

interface Props {
  src: string;
  size: number;
}

export const Avatar: React.FC<Props> = ({ src, size }) => {
  return <img className="rounded-full" src={src} width={size} height={size} />;
};
