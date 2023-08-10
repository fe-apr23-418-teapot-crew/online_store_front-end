import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

export const useErrorHandling = () => {
  const navigate = useNavigate();

  const handleError = (error: unknown) => {
    const axiosError = error as AxiosError;

    navigate('/error', {
      state: { errorMessage: axiosError.message },
    });
  };

  return {
    handleError,
  };
};
