export const IS_CHANGE_PASSWORD = 'PASSWORD/IS_CHANGE_PASSWORD';

export const changePasswordAC = (isChange: boolean) =>
  ({ type: IS_CHANGE_PASSWORD, payload: { isChange } } as const);
