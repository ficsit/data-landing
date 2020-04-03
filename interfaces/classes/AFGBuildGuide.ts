import { EGuideLineType } from '../enums/EGuideLineType';
import { AActor } from '../native/classes';

export interface AFGBuildGuide extends AActor {
  /**
   * Defines what type of build guide line this is.
   */
  mGuideLineType: EGuideLineType;
}
