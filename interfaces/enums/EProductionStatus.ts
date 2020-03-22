export enum EProductionStatus {
  IS_NONE,
  IS_PRODUCING,

  /**
   * We have a crystal in the potential slot and are producing
   */
  IS_PRODUCING_WITH_CRYSTAL,
  IS_STANDBY,
  IS_ERROR,
  IS_MAX,
}
