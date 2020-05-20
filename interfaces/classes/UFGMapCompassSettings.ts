import { ECompassViewDistance } from '../enums/ECompassViewDistance';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGMapCompassSettings extends Unknown<'UDeveloperSettings'> {
  mCompassViewDistances: Map<ECompassViewDistance, float>;

  mLowestWorldLocation: float;

  mHighestWorldLocation: float;

  mFogOfWarUpperRangeMin: float;

  mFogOfWarUpperRangeMax: float;

  mFogOfWarGradientExpandValue: float;

  mEnableFogOfWarRevealCalculations: boolean;

  mEnableFogOfWarTextureUpdates: boolean;

  mForceSingleThreadedCalculations: boolean;
}
