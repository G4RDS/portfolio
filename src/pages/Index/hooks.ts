import { useState } from 'react';

export const useTrackActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>();

  return [activeSection] as const;
};
