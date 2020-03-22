import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { AFGResourceNode } from './AFGResourceNode';
import { UFGInteractWidget } from './UFGInteractWidget';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface AFGPortableMiner extends AActor, IFGUseableInterface, IFGSaveInterface {
  /**
   * How fast we mine expressed as 1.0f / ( mExtractCycleTime
   *  resourceSpeedMultiplier )
   *  dt.
   */
  mExtractCycleTime: float;

  /**
   * The resource node we want to extract from
   */
  mExtractResourceNode: AFGResourceNode;

  /**
   * The inventory of the factory node
   */
  mOutputInventory: UFGInventoryComponent;

  /**
   * Current extract progress in the range [0, 1]
   */
  mCurrentExtractProgress: float;

  /**
   * The widget that will present our UI.
   */
  mInteractWidgetClass: classReference<UFGInteractWidget>;

  /**
   * How many slots is the inventory
   */
  mInventorySize: int32;

  /**
   * Are we producing?
   */
  mIsProducing: boolean;
}
