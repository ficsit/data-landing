export enum EGameVersion {
  GV_Main,
  GV_Experimental,
  GV_Other,
}

export namespace EGameVersion {
  export const DisplayName = {
    [EGameVersion.GV_Main]: 'Main',
    [EGameVersion.GV_Experimental]: 'Experimental',
    [EGameVersion.GV_Other]: 'Other',
  };
}
