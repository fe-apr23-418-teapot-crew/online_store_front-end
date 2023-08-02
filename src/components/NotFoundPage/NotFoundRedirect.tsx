import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('./NotFoundPage.tsx');
  });

  return null;
};