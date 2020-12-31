import React from 'react';

import { Layout } from 'components/Layout';
import { Navigation } from 'components/Navigation/Navigation';
import { NavigationItem } from 'components/Navigation/NavigationItem';
import { AboutMe } from 'components/AboutMe/AboutMe';

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
      <div className="pl-72">
        <div className="pl-12">
          <AboutMe />
        </div>
      </div>
    </Layout>
  );
};
