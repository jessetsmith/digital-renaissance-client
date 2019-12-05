import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'pHajD3tDATHRg3QBQLe4XRfnPaSJJihJ',
  CLIENT_DOMAIN: 'dev-1dlthkev.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:3000', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};