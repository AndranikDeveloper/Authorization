const baseUrl: BaseUrl = 'https://auth-qa.qencode.com';

export const requestsUrl: IRequestsUrl = {
  accessToken: `${baseUrl}/v1/auth/access-token`,
  refreshToken: `${baseUrl}/v1/auth/refresh-token`,
  login: `${baseUrl}/v1/auth/login`,
  resetPassword: `${baseUrl}/v1/auth/password-reset`,
  setPassword: `${baseUrl}/v1/auth/password-set`,
  healthCheck: `${baseUrl}/healthcheck`,
};
