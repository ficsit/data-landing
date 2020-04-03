import { float, uint8 } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGBuildablePipeline } from './AFGBuildablePipeline';
import { AFGFactoryHologram } from './AFGFactoryHologram';

export interface AFGPipelineAttachmentHologram extends AFGFactoryHologram {
  /**
   * Used to limit the placement in turns. What's the maximum offset to check from center to detect the curve.
   */
  mMaxValidTurnOffset: float;

  /**
   * Used to limit the placement in turns. What's the maximum angle.
   */
  mMaxValidTurnAngle: float;

  /**
   * The axis to rotate around for scroll rotation
   */
  mRotationAxis: Unknown<'EAxis::Type'>;

  /**
   * Should this attachment increment its snapped connection index on Scroll?
   */
  mIncrementSnappedConnectionOnScroll: boolean;

  /**
   * Whether or not to display directional arrows on producer component types
   */
  mUseProducerDirectionalArrow: uint8;

  /**
   * Local location to place the producer directional arrow mesh if enabled
   */
  mProducerArrowRelativeLocation: Vector;

  /**
   * When snapping to a Wall apply this offset on the wall.
   */
  mWallSnapOffset: Unknown<'FVector2D'>;

  /**
   * Directional indicator. Added to visualize "Producer" type pipe connection components direction
   */
  mProducerComponentArrows: Unknown<'UStaticMeshComponent'>[];

  /**
   * The pipeline we snapped to.
   */
  mSnappedPipeline: AFGBuildablePipeline;

  /**
   * Cached list of all connections in this attachment hologram
   */
  mPipeConnectionComponents: Unknown<'UFGPipeConnectionComponent'>[];

  mSnappedConnectionComponent: Unknown<'UFGPipeConnectionComponent'>;
}