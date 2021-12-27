import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authBaseUrl = '/api/v1/user';

export const login = credentials => {
  return client.post(`${authBaseUrl}/login`, credentials).then(({ token }) => {
    configureClient({ token });
    storage.set('auth', token);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};

export const register = credentials => {
  return client.post(`${authBaseUrl}/register`, credentials);
};

export const duplicated = username => {
  return client.post(`${authBaseUrl}/duplicated`, username);
};
