import { float } from '../native/primitive';

import { AFGBuildableFactory } from './AFGBuildableFactory';

export interface AFGBuildableGenerator extends AFGBuildableFactory {
  /**
   * Amount of power this generator produces in MW.
   */
  mPowerProduction: float;

  mPowerProductionExponent: float;

  /**
   * Current load of this generator in the range [0,1].
   */
  mLoadPercentage: float;

  /**
   * Is the fuse triggered.
   */
  mIsFuseTriggered: boolean;
}
