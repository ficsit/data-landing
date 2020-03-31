export enum EDeferredCollisionChange {
  DCC_None,
  DCC_TURN_ON,
  DCC_TURN_OFF,
}

export namespace EDeferredCollisionChange {
  export const DisplayName = {
    [EDeferredCollisionChange.DCC_None]: 'Do nothing',
    [EDeferredCollisionChange.DCC_TURN_ON]: 'Turn On Collision',
    [EDeferredCollisionChange.DCC_TURN_OFF]: 'Turn Off Collision',
  };
}
