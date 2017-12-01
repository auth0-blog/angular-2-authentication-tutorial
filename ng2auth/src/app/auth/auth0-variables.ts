interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'Rp1ZbPH6fK93lynaOt6HyQa3KcvN7Xl8',
  CLIENT_DOMAIN: 'kmaida.auth0.com',
  AUDIENCE: 'http://localhost:3001',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
};
