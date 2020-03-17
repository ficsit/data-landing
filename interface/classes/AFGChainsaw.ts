import { float } from '../native/primitive';
import { classReference } from '../native/references';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGChainsaw {
  /**
   * The fuel we want to be able to use with the chainsaw
   */
  mFuelClass: classReference<UFGItemDescriptor>;

  /**
   * How much energy the chainsaw consumes. In megawatt seconds (MWs)
   */
  mEnergyConsumption: float;

  /**
   * How many seconds should it take to saw down a tree
   */
  mSawDownTreeTime: float;

  /**
   * How large radius of automatic pick up of foliage is when using chainsaw
   */
  mCollateralPickupRadius: float;

  /**
   * If collateral pickups should exclude chainsawable foliage when using chainsaw
   */
  mExcludeChainsawableFoliage: boolean;

  mEnergyStored: float;
}
