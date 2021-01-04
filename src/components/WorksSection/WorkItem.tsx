import React from 'react';

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
    <div className="flex rounded-3xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-0 flex-1 max-w-xs object-cover"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl text-gray-700 font-bold">{name}</h2>
          <p className="mt-3 text-base text-gray-600">{description}</p>
        </div>
        <div className="mt-3">
          {tags.map((tag, index) => (
            <span
              className="inline-block h-8 px-4 rounded-2xl bg-blue-500 text-white font-bold leading-8"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
