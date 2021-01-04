import React from 'react';

import { SectionTitle } from 'components/SectionTitle';

export const CareerSection: React.FC = () => {
  return (
    <div className="mt-12">
      <SectionTitle>Career</SectionTitle>
      <p className="mt-8 text-base text-gray-700">
        2019.6 ~ 学生ベンチャー prane.jpn でフロントエンドエンジニアとして働く
        <br />
        2020.8 ~ 2020.10 LINE
        株式会社のサマーインターンにフロントエンドエンジニアとして参加
        <br />
        2020.10 ~ LINE 株式会社でフロントエンドエンジニアアルバイトとして働く
      </p>
    </div>
  );
};
