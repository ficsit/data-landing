import { EResourceAmount } from '../enums/EResourceAmount';
import { EResourcePurity } from '../enums/EResourcePurity';
import { IFGExtractableResourceInterface } from '../interfaces/IFGExtractableResourceInterface';
import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { UParticleSystem } from '../native/assets';
import { AActor, UObject } from '../native/classes';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FPurityTextPair } from '../structs/FPurityTextPair';

import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGResourceNode
  extends AActor,
    IFGExtractableResourceInterface,
    IFGSaveInterface,
    IFGUseableInterface,
    IFGSignificanceInterface {
  /**
   * Type of resource
   */
  mResourceClass: classReference<UFGResourceDescriptor>;

  /**
   * How pure the resource is
   */
  mPurity: EResourcePurity;

  /**
   * How pure the resource is
   */
  mAmount: EResourceAmount;

  /**
   * the decal that used for displaying the resource
   */
  mDecalComponent: Unknown<'UDecalComponent'>;

  /**
   * If we have no static mesh but a decal, then we use this for collision
   */
  mBoxComponent: Unknown<'UBoxComponent'>;

  /**
   * How much resources is left in this node
   */
  mResourcesLeft: int32;

  /**
   * If true, then we are occupied by something // [Dylan 3/2/2020] - Removed savegame meta
   */
  mIsOccupied: boolean;

  /**
   * Radar tower modifies this to show this resource node in the map
   */
  mRevealedOnMapBy: UObject[];

  /**
   * If true, this node will NEVER join another cluster of nodes, regardless of proximity.
   */
  mIsLonerNode: boolean;

  /**
   * Can this resource node be used for placing resource extractors on
   */
  mCanPlaceResourceExtractor: boolean;

  /**
   * Multiplier that is applied in the end of extraction calculations. Is used for making deposits extract more than regular nodes
   */
  mExtractMultiplier: int32;

  /**
   * Text mapped to resource purity
   */
  mPurityTextArray: FPurityTextPair[];

  /**
   * Particle system component
   */
  mHighlightParticleSystemTemplate: UParticleSystem;

  /**
   * Particle system component
   */
  mHighlightParticleSystemComponent: Unknown<'UParticleSystemComponent'>;

  /**
   * Bool for is we should spawn particle - @todo Do we really need to save this? //[Dylan 3/2/2020]
   */
  mDoSpawnParticle: boolean;

  /**
   * Should this be handled by significance manager
   */
  mAddToSignificanceManager: boolean;
}
