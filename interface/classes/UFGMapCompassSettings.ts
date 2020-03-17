import { ECompassViewDistance } from '../enums/ECompassViewDistance';
import { float } from '../native/primitive';

export interface UFGMapCompassSettings {
  mCompassViewDistances: Record<ECompassViewDistance, float>;

  mLowestWorldLocation: float;

  mHighestWorldLocation: float;

  mFogOfWarUpperRangeMin: float;

  mFogOfWarUpperRangeMax: float;

  mFogOfWarGradientExpandValue: float;

  mEnableFogOfWarRevealCalculations: boolean;

  mEnableFogOfWarTextureUpdates: boolean;

  mForceSingleThreadedCalculations: boolean;
}
