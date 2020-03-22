export enum EClassRepPolicy {
  /**
   * Doesn't map to any node. Used for special case actors that handled by special case nodes (UShooterReplicationGraphNode_PlayerStateFrequencyLimiter)
   */
  CRP_NotRouted,

  /**
   * Routes to mAlwaysRelevantNode or mAlwaysRelevantStreamingLevelNode node
   */
  CRP_RelevantAllConnections,

  /**
   * Routes to mConditionalRelevantNode that runs IsNetRelevantFor() on each actor. Expects each actor to be relevant for all connections
   */
  CRP_ConditionalRelevant,

  /**
   * Spatialized routes into the grid node
   * Routes to mGridNode: these actors don't move and don't need to be updated every frame.
   */
  CRP_Spatialize_Static,

  /**
   * Routes to mGridNode: these actors move frequently and are updated once per frame.
   */
  CRP_Spatialize_Dynamic,

  /**
   * Routes to mGridNode: While dormant we treat as static. When flushed/not dormant dynamic. Note this is for things that "move while not dormant".
   */
  CRP_Spatialize_Dormancy,

  /**
   * Routes to mPrioritizedGridNode: these actors are updated in the same manner as the regular dynamic nodes, but their replication rate is not distributed over frames
   */
  CRP_Spatialize_Prioritized_Dynamic,
}
