import React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../consts/api';

export const ActivationPage = () => {
  const { activationToken } = useParams();
  const link = `${API_URL}activation/${activationToken}`;

  return (
    <>
      <h1 className="title">Account activation</h1>

      <a>{link}</a>
    </>
  );
};
