export enum ESaveExists {
  SE_DoesntExist,
  SE_ExistsInSameSession,
  SE_ExistsInOtherSession,
}

export namespace ESaveExists {
  export const DisplayName = {
    [ESaveExists.SE_DoesntExist]: 'DoesntExist',
    [ESaveExists.SE_ExistsInSameSession]: 'ExistsInSameSession',
    [ESaveExists.SE_ExistsInOtherSession]: 'ExistsInOtherSession',
  };
}
