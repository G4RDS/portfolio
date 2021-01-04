import React, { useState } from 'react';

const errorSrc =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

interface Props {
  src: string;
  size: number;
}

export const Avatar: React.FC<Props> = ({ src, size }) => {
  const [isError, setIsError] = useState(false);

  return (
    <img
      className="rounded-full"
      src={isError ? errorSrc : src}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      onError={() => {
        setIsError(true);
      }}
    />
  );
};
