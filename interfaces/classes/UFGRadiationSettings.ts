import { EResourcePurity } from '../enums/EResourcePurity';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FRadiationVisualization } from '../structs/FRadiationVisualization';

import { UFGDamageType } from './UFGDamageType';

export interface UFGRadiationSettings extends Unknown<'UDeveloperSettings'> {
  mRadiationDamageType: classReference<UFGDamageType>;

  mMaxIntensity: float;

  mMinDamageInterval: float;

  mMaxDamageInterval: float;

  mDamagePerInterval: float;

  mMinDistanceToSource: float;

  mMinRadiationThreshold: float;

  mRadiationFalloffByDistance: float;

  mNodeRadiationPurityAmounts: Map<EResourcePurity, int32>;

  mCalculateNewValues: boolean;

  mVisualizations: FRadiationVisualization[];
}
