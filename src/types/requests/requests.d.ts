type BaseUrl = 'https://auth-qa.qencode.com';

interface IRequestsUrl {
  accessToken: `${BaseUrl}/v1/auth/access-token`;
  refreshToken: `${BaseUrl}/v1/auth/refresh-token`;
  login: `${BaseUrl}/v1/auth/login`;
  resetPassword: `${BaseUrl}/v1/auth/password-reset`;
  setPassword: `${BaseUrl}/v1/auth/password-set`;
  healthCheck: `${BaseUrl}/healthcheck`;
}

interface ILoginData {
  email: string;
  password: string;
}

interface ILoginResponse {
  error: number;
  detail: any;
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}

interface IPasswordResetData {
  email: string;
  redirect_url?: string;
}

interface IPasswordResetResponse {
  error: number;
  detail: any;
  timestamp: number;
}

interface IPasswordSetData {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
}

interface IPasswordSetResponse {
  error: number;
  detail: any;
  timestamp: number;
}

interface IAccessTokenData {
  access_id: string;
}

interface IRefreshTokenData {
  refresh_token: string;
}
