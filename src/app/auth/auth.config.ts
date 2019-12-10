import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  CLIENT_SECRET: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'pHajD3tDATHRg3QBQLe4XRfnPaSJJihJ',
  CLIENT_DOMAIN: 'dev-1dlthkev.auth0.com', // e.g., you.auth0.com
  CLIENT_SECRET: 'PdsPUz4CIleTV5fl96cZ8KVC0CRRztX3ViOHWUnevgw4HpvvqKIHc1IQp6BAkB4-',
  AUDIENCE: 'http://localhost:3000', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',  
  NAMESPACE: 'http://myapp.com/roles'

};