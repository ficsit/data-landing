export enum EPipeConnectionType {
  PCT_ANY,
  PCT_CONSUMER,
  PCT_PRODUCER,

  /**
   * How its handled for factories, which also mentions it may need a refactor
   */
  PCT_SNAP_ONLY,
  PCT_MAX,
}

export const EPipeConnectionTypeDisplayName = {
  [EPipeConnectionType.PCT_ANY]: 'Any',
  [EPipeConnectionType.PCT_CONSUMER]: 'Consumer',
  [EPipeConnectionType.PCT_PRODUCER]: 'Producer',
  [EPipeConnectionType.PCT_SNAP_ONLY]: 'Snap Only',
  [EPipeConnectionType.PCT_MAX]: '<PCT_MAX>',
};
