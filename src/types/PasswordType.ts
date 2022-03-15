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
};
