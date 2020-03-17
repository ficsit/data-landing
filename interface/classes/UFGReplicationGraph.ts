import { AActor } from '../native/classes';
import { set } from '../native/collections';
import { Unknown } from '../native/unknown';
import { FConnectionAlwaysRelevant_NodePair } from '../structs/FConnectionAlwaysRelevant_NodePair';

import { UFGReplicationGraphNode_ConditionallyAlwaysRelevant } from './UFGReplicationGraphNode_ConditionallyAlwaysRelevant';

export interface UFGReplicationGraph {
  mSpatializedClasses: Unknown<'UClass'>[];

  mNonSpatializedClasses: Unknown<'UClass'>[];

  mAlwaysRelevantClasses: Unknown<'UClass'>[];

  /**
   * Grid Node that divides the map into grids and determines if an actor should send network updates to a connection depending on the different pre-defined grids.
   */
  mGridNode: Unknown<'UReplicationGraphNode_GridSpatialization2D'>;

  /**
   * Grid Node that is dedicated for more frequently updated actors. Does not divide cells into buckets.
   */
  mPrioritizedGridNode: Unknown<'UReplicationGraphNode_GridSpatialization2D'>;

  /**
   * Node that holds a list of actors that are always Net Relevant.
   */
  mAlwaysRelevantNode: Unknown<'UReplicationGraphNode_ActorList'>;

  mConditionalRelevancyNode: UFGReplicationGraphNode_ConditionallyAlwaysRelevant;

  mAlwaysRelevantForConnectionList: FConnectionAlwaysRelevant_NodePair[];

  /**
   * Class types of equipment who's dependency to the pawn shouldn't be removed if they're unequipped.
   */
  mPersistentDependencyClasses: set<Unknown<'UClass'>>[];

  /**
   * Actors that are only supposed to replicate to their owning connection, but that did not have a connection on spawn
   */
  mActorsWithoutNetConnection: AActor[];
}
