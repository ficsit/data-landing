import { int32 } from '../native/primitive';
import { FConnectionItemStruct } from '../structs/FConnectionItemStruct';
import { FConveyorSpaceData } from '../structs/FConveyorSpaceData';

import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';

export interface AFGBuildableAttachmentSplitter {
  /**
   * Cycles through the outputs, stores the output we want to put mItem on. Index is for the mOutputs array.
   */
  mCurrentOutputIndex: int32;

  mCurrentInventoryIndex: int32;

  /**
   * Table of all items in the inventory mapped to a desired output. The array is filled from a call to FillDistributionTable which runs in factory tick
   */
  mDistributionTable: FConnectionItemStruct[];

  /**
   * Store last cached available space and if an item have been grabbed by the connected components
   */
  mConveyorSpaceData: Record<UFGFactoryConnectionComponent, FConveyorSpaceData>;
}
