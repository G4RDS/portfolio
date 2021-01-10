import React from 'react';
import { x } from '@xstyled/styled-components';

import { SectionTitle } from 'components/SectionTitle';

export const CareerSection: React.FC = () => {
  return (
    <x.div mt={12}>
      <SectionTitle>Career</SectionTitle>
      <x.p mt={8} fontSize="base" lineHeight="normal" color="gray-700">
        2019.6 ~ 学生ベンチャー prane.jpn でフロントエンドエンジニアとして働く
        <br />
        2020.8 ~ 2020.10 LINE
        株式会社のサマーインターンにフロントエンドエンジニアとして参加
        <br />
        2020.10 ~ LINE 株式会社でフロントエンドエンジニアアルバイトとして働く
      </x.p>
    </x.div>
  );
};
