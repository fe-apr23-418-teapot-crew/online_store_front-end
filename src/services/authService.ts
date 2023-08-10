import { authClient } from '../http/authClient.js';

interface UserData {
  email: string;
  password: string;
}

function register({ email, password }: UserData) {
  return authClient.post('/registration', { email, password });
}

function login({ email, password }: UserData) {
  return authClient.post('/login', { email, password });
}

function logout() {
  return authClient.post('/logout');
}

function activate(activationToken: string) {
  return authClient.get(`/activation/${activationToken}`);
}

function refresh() {
  return authClient.get('/refresh');
}

export const authService = { register, login, logout, activate, refresh };
