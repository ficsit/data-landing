export enum EGamePhase {
  EGP_EarlyGame,
  EGP_MidGame,
  EGP_LateGame,
  EGP_EndGame,
  EGP_FoodCourt,
  EGP_Victory,
}

export namespace EGamePhase {
  export const DisplayName = {
    [EGamePhase.EGP_EarlyGame]: 'Establishing Phase',
    [EGamePhase.EGP_MidGame]: 'Development Phase',
    [EGamePhase.EGP_LateGame]: 'Expansion Phase',
    [EGamePhase.EGP_EndGame]: 'Retention Phase',
    [EGamePhase.EGP_FoodCourt]: 'Food Court',
    [EGamePhase.EGP_Victory]: 'Victory!',
  };
}
