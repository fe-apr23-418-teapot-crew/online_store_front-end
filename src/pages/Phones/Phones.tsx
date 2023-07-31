import React from 'react';
import { ContentLayout } from '../../layout/ContentLayout/ContentLayout';

interface PhonesProps {}

export const Phones: React.FC<PhonesProps> = () => {
  return <ContentLayout path="phones" title="Mobile Phones" />;
};
