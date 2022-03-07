import { createContext, ReactNode, useContext, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

interface Props {
  children: ReactNode;
}

const ApiContext = createContext<AxiosInstance | null>(null);

const ApiProvider = ({ children }: Props) => {
  const createAxios = () => {
    const client = axios.create({
      baseURL: process.env.REACT_APP_API_HOST,
      timeout: 30000,
    });
    client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const { status, data: { code } = null } = error.response;
          if (status === 401 && code !== 'Login error') {
            // sign out user and redirect
          }
        }
        return Promise.reject(error);
      }
    );
    return client;
  };
  const [apiContext] = useState(createAxios);

  return <ApiContext.Provider value={apiContext}>{children}</ApiContext.Provider>;
};

function useApiContext() {
  const context = useContext(ApiContext);

  if (context === undefined || context === null) {
    throw new Error('useApiContext must be inside a ApiProvider');
  }

  return context;
}

export { useApiContext, ApiProvider };
