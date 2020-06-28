import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { UMaterial, UStaticMesh } from '../native/assets';
import { AActor } from '../native/classes';
import { float, int32, uint8 } from '../native/primitive';
import { Color, LinearColor } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FDistanceBasedTickRate } from '../structs/FDistanceBasedTickRate';
import { FFactoryTickFunction } from '../structs/FFactoryTickFunction';

import { AFGBuildable } from './AFGBuildable';
import { AFGBuildableConveyorAttachment } from './AFGBuildableConveyorAttachment';
import { AFGSubsystem } from './AFGSubsystem';
import { UFGColoredInstanceManager } from './UFGColoredInstanceManager';
import { UFGFactoryMaterialInstanceManager } from './UFGFactoryMaterialInstanceManager';

export interface AFGBuildableSubsystem extends AFGSubsystem, IFGSaveInterface {
  /**
   * Distance used when calculating if a location is near a base
   */
  mDistanceConsideredClose: float;

  /**
   * How many factories need to be within the close range for it to count as if a given location is near a base
   */
  mNumFactoriesNeededForCloseCheck: int32;

  /**
   * Broadcast when a buildable or decor has been constructed. Regardless of who built it
   */
  BuildableConstructedGlobalDelegate: Unknown<'FOnBuildableConstructedGlobal'>;

  /**
   * List of all buildables.
   */
  mBuildables: AFGBuildable[];

  /**
   * All conveyor attachments
   */
  mConveyorAttachments: AFGBuildableConveyorAttachment[];

  /**
   * Hierarchical instances for the factory buildings.
   */
  mBuildableInstancesActor: AActor;

  mBuildableMeshInstances: Map<UStaticMesh, Unknown<'UProxyHierarchicalInstancedStaticMeshComponent'>>;

  /**
   * /
   */
  mColoredInstances: Map<UStaticMesh, UFGColoredInstanceManager>;

  /**
   * DEPRECATED - Use Linear Color instead
   */
  mColorSlotsPrimary: Color;

  /**
   * DEPRECATED - Use Linear Color instead
   */
  mColorSlotsSecondary: Color;

  mColorSlotsPrimary_Linear: LinearColor[];

  mColorSlotsSecondary_Linear: LinearColor[];

  /**
   * The number of color slots players can adjust/define, this can be less than the total number of color slots actually present
   */
  mNbPlayerExposedSlots: uint8;

  /**
   * This is also used for non-colored materials, for example, the conveyor belt materials so that the same instance can be applied to many different belts
   */
  mFactoryColoredMaterialMap: Map<string, UFGFactoryMaterialInstanceManager>;

  /**
   * Begin Fixed Factory Tick Config Parameters
   */
  mUseFixedFactoryTick: boolean;

  mMinFactoryTickRate: float;

  mMaxFactoryTickRate: float;

  mMaxTickSubsteps: Unknown<'int'>;

  /**
   * Information about what distances we change the tick rate on
   */
  mDistanceBasedTickRate: FDistanceBasedTickRate[];

  /**
   * Is factory optimization ( tick control ) active
   */
  mFactoryOptimizationEnabled: boolean;

  /**
   * How much time can differ between each build effect
   */
  mReplayEffecTimeDilation: float;

  /**
   * How much time between each build effect when replaying the whole factory
   */
  mReplayEffectTimerDefault: float;

  /**
   * used for comparing and finding materials of factory meshes
   */
  mDefaultFactoryMaterial: UMaterial;

  /**
   * Controls if we should receive Factory_Tick and how frequent.
   */
  mFactoryTickFunction: FFactoryTickFunction;
}
