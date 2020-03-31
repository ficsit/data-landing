export enum ESelfDrivingLocomotiveError {
  SDLE_NoError,
  SDLE_NoPower,
  SDLE_NoTimeTable,
  SDLE_InvalidNextStop,
  SDLE_InvalidLocomotivePlacement,
  SDLE_NoPath,
}

export namespace ESelfDrivingLocomotiveError {
  export const DisplayName = {
    [ESelfDrivingLocomotiveError.SDLE_NoError]: 'No Error',
    [ESelfDrivingLocomotiveError.SDLE_NoPower]: 'No Power',
    [ESelfDrivingLocomotiveError.SDLE_NoTimeTable]: 'No Time Table',
    [ESelfDrivingLocomotiveError.SDLE_InvalidNextStop]: 'Invalid Next Stop',
    [ESelfDrivingLocomotiveError.SDLE_InvalidLocomotivePlacement]: 'Invalid Locomotive Placement',
    [ESelfDrivingLocomotiveError.SDLE_NoPath]: 'No Path',
  };
}
