/**
 * Pathfinding result.
 */
export enum ERailroadPathFindingResult {
  RNQR_Error,
  RNQR_Unreachable,
  RNQR_Success,
}

export const ERailroadPathFindingResultDisplayName = {
  [ERailroadPathFindingResult.RNQR_Error]: 'Error',
  [ERailroadPathFindingResult.RNQR_Unreachable]: 'Unreachable',
  [ERailroadPathFindingResult.RNQR_Success]: 'Success',
};
