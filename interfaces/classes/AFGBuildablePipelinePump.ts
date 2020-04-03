import { float } from '../native/primitive';
import { FQuantizedPumpIndicatorData } from '../structs/FQuantizedPumpIndicatorData';

import { AFGBuildablePipelineAttachment } from './AFGBuildablePipelineAttachment';

export interface AFGBuildablePipelinePump extends AFGBuildablePipelineAttachment {
  /**
   * Maximum pressure this pump applies. [meters]
   */
  mMaxPressure: float;

  /**
   * When the pump is working above this pressure, it's working outside of it's specifications, range [0, max pressure), unit [meters]
   */
  mDesignPressure: float;

  /**
   * Maximum flow rate of this pump. [m3/s]
   */
  mFlowLimit: float;

  /**
   * Minimum Flow percent acceptable before entering StandBy mode on indicator
   */
  mMinimumFlowPercentForStandby: float;

  /**
   * Quantized data used by the indicators.
   */
  mIndicatorData: FQuantizedPumpIndicatorData;
}
