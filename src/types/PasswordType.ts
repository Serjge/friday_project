export type ForgotPasswordSendType = {
  email: string;
  from: string;
  message: string;
};

export type ForgotPasswordGetType = {
  info: string;
  success: boolean;
  answer: boolean;
  html: boolean;
};

export type CreateNewPasswordType = {
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordFormType = {
  email: string;
};

export type SendNewPasswordType = {
  password: string;
  resetPasswordToken: string;
};

export type SendNewPasswordAnswerType = {
  info: string;
};
