export enum EFogOfWarRevealType {
  FOWRT_None,
  FOWRT_Static,
  FOWRT_Intermittent,
  FOWRT_Dynamic,
}

export namespace EFogOfWarRevealType {
  export const DisplayName = {
    [EFogOfWarRevealType.FOWRT_None]: 'None',
    [EFogOfWarRevealType.FOWRT_Static]: 'Static',
    [EFogOfWarRevealType.FOWRT_Intermittent]: 'Intermittent',
    [EFogOfWarRevealType.FOWRT_Dynamic]: 'Dynamic',
  };
}
