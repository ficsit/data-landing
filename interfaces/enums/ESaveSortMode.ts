export enum ESaveSortMode {
  SSM_Name,
  SSM_Time,
}

export namespace ESaveSortMode {
  export const DisplayName = {
    [ESaveSortMode.SSM_Name]: 'Name',
    [ESaveSortMode.SSM_Time]: 'Time',
  };
}
