import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { UAkAudioEvent } from '../native/assets';
import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { classReference, objectReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FFluidBox } from '../structs/FFluidBox';
import { FQuantizedPipelineIndicatorData } from '../structs/FQuantizedPipelineIndicatorData';
import { FStringPair } from '../structs/FStringPair';

import { AFGBuildablePipeBase } from './AFGBuildablePipeBase';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGPipelineFlowIndicatorComponent } from './UFGPipelineFlowIndicatorComponent';
import { UFGSoundSplineComponent } from './UFGSoundSplineComponent';

export interface AFGBuildablePipeline extends AFGBuildablePipeBase, IFGFluidIntegrantInterface {
  /**
   * Inner Radius of this pipe. Used for flow calculations. [cm]
   */
  mRadius: float;

  /**
   * Maximum flow through this pipe in cubic meters. [m^3/s]
   */
  mFlowLimit: float;

  /**
   * Type of indicator to spawn on this pipe.
   */
  mFlowIndicatorClass: classReference<UFGPipelineFlowIndicatorComponent>;

  /**
   * Smaller pipes than this will not get a flow indicator. [cm]
   */
  mFlowIndicatorMinimumPipeLength: float;

  mSoundSplineComponent: UFGSoundSplineComponent;

  /**
   * The ak event to post for the sound spline
   */
  mSplineAudioEvent: UAkAudioEvent;

  /**
   * Cached array of pipe connections.
   */
  mPipeConnections: Unknown<'UFGPipeConnectionComponent'>[];

  /**
   * Simulation data.
   */
  mFluidBox: FFluidBox;

  /**
   * Quantized data used by the indicators.
   */
  mIndicatorData: FQuantizedPipelineIndicatorData;

  mMaxIndicatorTurnAngle: float;

  mCachedFluidDescriptor: classReference<UFGItemDescriptor>;

  /**
   * Array of objects to ignore when performing the collision check in the indicator placement. This is needed during merge / split creation of new pipelines
   */
  mIgnoreActorsForIndicator: objectReference<AActor>[];

  /**
   * struct with both wwise safe names and their item names
   */
  mFluidNames: FStringPair[];

  /**
   * current fluid that is in the pipe
   */
  mCurrentFluid: string;

  /**
   * how filled is the pipe
   */
  mQuantiziedContent: float;

  /**
   * flow rate in the pipe
   */
  mQuantiziedFlow: float;

  /**
   * at what flow should we play rattle
   */
  mRattleLimit: float;

  /**
   * are we playing rattling sound?
   */
  mIsRattling: boolean;

  /**
   * Start rattle sound
   */
  mStartRattleSoundEvent: UAkAudioEvent;

  /**
   * Stop rattle sound
   */
  mStopRattleSoundEvent: UAkAudioEvent;
}
