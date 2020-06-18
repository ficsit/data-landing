export enum EIgnore {
  I_NONE,
  I_FALSE,
  I_NOT_VALID,
  I_NO_PATH,
  I_LastEnum,
}

export const EIgnoreDisplayName = {
  [EIgnore.I_NONE]: 'Invalid status.',
  [EIgnore.I_FALSE]: 'Target is not ignored.',
  [EIgnore.I_NOT_VALID]: 'Target ignored cause not valid',
  [EIgnore.I_NO_PATH]: 'Target ignored cause could not find path.',
  [EIgnore.I_LastEnum]: '<I_LastEnum>',
};
