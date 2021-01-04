import React from 'react';
import { x } from '@xstyled/styled-components';

import { Layout } from 'components/Layout';
import { Navigation } from 'components/Navigation/Navigation';
import { NavigationItem } from 'components/Navigation/NavigationItem';
import { AboutMeSection } from 'components/AboutMeSection/AboutMeSection';
import { WorksSection } from 'components/WorksSection/WorksSection';
import { SkillsSection } from 'components/SkillsSection/SkillsSection';
import { CareerSection } from 'components/CareerSection/CareerSection';

export const Index: React.FC = () => {
  return (
    <Layout>
      <Navigation>
        <NavigationItem
          name="About me"
          icon="address-card"
          href="#about-me"
          isActive
        />
        <NavigationItem name="Works" icon="rocket-launch" href="#works" />
        <NavigationItem name="Skills" icon="code" href="#skills" />
        <NavigationItem name="Career" icon="briefcase" href="#career" />
      </Navigation>
      <x.div pl={72}>
        <x.div pl={12}>
          <AboutMeSection />
          <WorksSection />
          <SkillsSection />
          <CareerSection />
        </x.div>
      </x.div>
    </Layout>
  );
};
