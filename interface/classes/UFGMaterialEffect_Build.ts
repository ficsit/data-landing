import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { FItemAmount } from '../structs/FItemAmount';

import { UFGMaterialEffectComponent } from './UFGMaterialEffectComponent';

export interface UFGMaterialEffect_Build extends UFGMaterialEffectComponent {
  /**
   * Who built this
   */
  mInstigator: AActor;

  /**
   * How much did this cost
   */
  mCost: FItemAmount[];

  /**
   * The speed of this effect.
   */
  mSpeed: float;
}
