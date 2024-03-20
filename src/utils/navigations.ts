interface INavigate {
  [key: string]: string;
}

export const navigations: INavigate = {
  login: '/',
  resetPassword: '/reset-password',
  setPassword: '/set-password',
  signUp: '/sign-up',
};
