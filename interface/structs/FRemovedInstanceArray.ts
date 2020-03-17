import { AFGFoliageRemoval } from '../classes/AFGFoliageRemoval';

import { FRemovedInstance } from './FRemovedInstance';

/**
 * Wrapper around the Items struct to enable custom delta serialization (we send a part of the data to the client every frame instead of sending it all in one frame)
 */
export interface FRemovedInstanceArray {
  /**
   * @todogc: Investigate if we can move this into a TWeakObjectPointer to reduce strain on gc
   */
  FoliageRemover: AFGFoliageRemoval;

  /**
   * All the items that has been removed from the AFGFoliageRemoval
   */
  Items: FRemovedInstance[];
}
