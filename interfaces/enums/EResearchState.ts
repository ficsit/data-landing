export enum EResearchState {
  ERS_NotResearching,
  ERS_Researching,
}

export namespace EResearchState {
  export const DisplayName = {
    [EResearchState.ERS_NotResearching]: 'Not Researching',
    [EResearchState.ERS_Researching]: 'Researching',
  };
}
