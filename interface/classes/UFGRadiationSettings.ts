import { EResourcePurity } from '../enums/EResourcePurity';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { FRadiationVisualization } from '../structs/FRadiationVisualization';

import { UFGDamageType } from './UFGDamageType';

export interface UFGRadiationSettings {
  mRadiationDamageType: classReference<UFGDamageType>;

  mMaxIntensity: float;

  mMinDamageInterval: float;

  mMaxDamageInterval: float;

  mDamagePerInterval: float;

  mMinDistanceToSource: float;

  mMinRadiationThreshold: float;

  mRadiationFalloffByDistance: float;

  mNodeRadiationPurityAmounts: Record<EResourcePurity, int32>;

  mCalculateNewValues: boolean;

  mVisualizations: FRadiationVisualization[];
}
