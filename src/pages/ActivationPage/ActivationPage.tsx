import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getActivation } from '../../api/products';
import { API_URL } from '../../consts/api';
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { User } from '../../types/User';

export const ActivationPage = () => {
  const { activationToken } = useParams();
  const token = activationToken || '';
  const link = `${API_URL}activation/${token}`;
  const { data, error } = useQuery<User>('activationToken', () =>
    getActivation(token),
  );

  const { handleError } = useErrorHandling();

  if (error) {
    handleError(error);
  }

  return (
    <section>
      <h1 className="title">Account activation</h1>
      <a>{link}</a>
      <h2>{data?.id}</h2>
      <h2>{data?.email}</h2>
    </section>
  );
};
