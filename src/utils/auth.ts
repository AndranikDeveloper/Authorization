interface IAuthTexts {
  [key: string]: string;
}

export const authTitle: IAuthTexts = {
  login: 'Log in to your account',
  forgotPassword: 'Forgot Password?',
  reset: 'Create new Password?',
};

export const buttonText: IAuthTexts = {
  login: 'Log in to Qencode',
  sendForgotPassword: 'Send',
  cancelForgotPassword: 'Cancel',
  resetPassword: 'Reset Password',
};
