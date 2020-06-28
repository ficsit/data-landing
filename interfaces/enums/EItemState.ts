/**
 * State that an item pickup can be in
 */
export enum EItemState {
  ES_SEED,
  ES_NORMAL,
  ES_MAX,
}

export const EItemStateDisplayName = {
  [EItemState.ES_SEED]: 'Seed',
  [EItemState.ES_NORMAL]: 'Normal',
  [EItemState.ES_MAX]: '<ES_MAX>',
};
