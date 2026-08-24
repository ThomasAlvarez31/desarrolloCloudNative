export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID, // o process.env.REACT_APP_AZURE_CLIENT_ID
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`,
    redirectUri: "http://localhost:8081", // URL local React 
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
  scopes: ["api://<CLIENT_ID_DE_TU_API>/access_as_user"] // Scope configurado en tu App Registration en Azure
};