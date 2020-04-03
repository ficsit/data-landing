import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FNodeClusterData } from '../structs/FNodeClusterData';

import { AFGEquipment } from './AFGEquipment';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGResourceScanner extends AFGEquipment {
  /**
   * This is the resource class to scan for
   */
  mResourceDescriptorToScanFor: classReference<UFGResourceDescriptor>;

  /**
   * How many node clusters should be marked
   */
  mNrOfClosestClustersToMark: int32;

  /**
   * Keeps track of the last time we pressed Scan
   */
  mLastPressedTimeStamp: float;

  /**
   * Time needed to hold down the key to show the selection UI
   */
  mHoldDownDurationForUI: float;

  /**
   * True in between OnScanPressed and OnScanReleased
   */
  mIsPressingScan: boolean;

  /**
   * True if we are waiting for the selection UI
   */
  mIsWaitingForSelectionUI: boolean;

  /**
   * If nodes are closer that dist they are considered within the cluster
   */
  mDistBetweenNodesInCluster: float;

  /**
   * A list of all the clusters of nodes non the level
   */
  mNodeClusters: FNodeClusterData[];
}
