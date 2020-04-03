import { float, int32 } from '../native/primitive';

export interface FRadiationVisualization {
  Case: string;

  ItemAmount: int32;

  Decay: float;

  UnitMultiplier: int32;

  HighestIntensity: float;

  HighestDamageInterval: float;

  DistanceForHighestIntensity: float;

  DistanceForNoticableIntensity: float;
}
