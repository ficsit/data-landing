import { EResourceForm } from '../enums/EResourceForm';
import { AActor } from '../native/classes';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

import { AFGResourceNode } from './AFGResourceNode';
import { UFGConstructDisqualifier } from './UFGConstructDisqualifier';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGBuildableResourceExtractor {
  /**
   * Power up time for the extraction process, e.g. the time it takes for a drill to start spinning.
   */
  mExtractStartupTime: float;

  /**
   * How much time we have left of the start up time for the extraction process (mExtractStartupTime).
   */
  mExtractStartupTimer: float;

  /**
   * How long does it take to complete one mining cycle. In seconds.
   */
  mExtractCycleTime: float;

  /**
   * How many items are extracted per cycle
   */
  mItemsPerCycle: int32;

  /**
   * Can we mine solids, liquids, gases or many of the types.
   */
  mAllowedResourceForms: EResourceForm[];

  mRequireResourceAtMinimumDepthChecks: boolean;

  /**
   * (For Hologram) Minimum depth to collision this extractor requires to be placed ( tex. Water Pumps need to be at least X distance above floor )
   */
  mMinimumDepthForPlacement: float;

  /**
   * Offset from hologram origin to begin and end traces When performing minimum depth checks ( if enabled for this buildable ) during placement
   */
  mDepthTraceOriginOffset: Vector;

  /**
   * @note - mAllowedResourceForms will still affect placement validation.
   */
  mOnlyAllowCertainResources: boolean;

  /**
   * List of acceptable resources this extractor can mine / pump
   */
  mAllowedResources: classReference<UFGResourceDescriptor>[];

  mExtractionOffset: Vector;

  /**
   * Class disqualifier to use when this resource extractor is not placed on a matching resource node ( used in the hologram )
   */
  mMustPlaceOnResourceDisqualifier: classReference<UFGConstructDisqualifier>;

  /**
   * name used to mathc types of extractros for compatiblility when upgrading
   */
  mExtractorTypeName: string;

  mExtractResourceNode: AFGResourceNode;

  mExtractableResource: AActor;

  /**
   * Current extract progress in the range [0, 1]
   */
  mCurrentExtractProgress: float;

  /**
   * Cached pipe output connections
   */
  mPipeOutputConnections: UFGPipeConnectionComponent[];

  /**
   * Our output inventory,
   */
  mOutputInventory: UFGInventoryComponent;

  /**
   * Replicated smoothed flow rate
   */
  mReplicatedFlowRate: float;
}
