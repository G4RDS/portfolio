import React from 'react';

interface Props {
  src: string;
  zIndex: number;
}

export const PickUpWorkItem: React.FC<Props> = ({ src, zIndex }) => {
  const translatePx = `${zIndex * 16}px`;

  return (
    <img
      className="absolute top-0 left-0 w-96 h-72 rounded-3xl shadow-lg"
      style={{
        transform: `translate(${translatePx}, ${translatePx})`,
      }}
      src={src}
    />
  );
};
