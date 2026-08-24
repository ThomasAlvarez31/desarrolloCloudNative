import axios from 'axios';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../config/authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL, // Ej: https://xyz.execute-api.us-east-1.amazonaws.com/prod
});

// Interceptor para adjuntar el JWT de Azure
api.interceptors.request.use(async (config) => {
  await msalInstance.initialize();
  const account = msalInstance.getAllAccounts()[0];

  if (account) {
    try {
      // Intenta obtener el token de forma silenciosa
      const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
      });
      // Agrega el JWT al header Authorization
      config.headers.Authorization = `Bearer ${response.accessToken}`;
    } catch (error) {
      console.error("Error obteniendo el token silencioso:", error);
    }
  }
  return config;
}, (error) => Promise.reject(error));

export default api;