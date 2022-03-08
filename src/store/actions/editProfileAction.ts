export const EditProfileAC = (needEdit: boolean) =>
  ({
    type: 'profile/changePersonalData',
    needEdit,
  } as const);

export type EditProfileActionType = ReturnType<typeof EditProfileAC>;
