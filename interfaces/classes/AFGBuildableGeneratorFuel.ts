import { EResourceForm } from '../enums/EResourceForm';
import { float, int32 } from '../native/primitive';
import { classReference, softClassReference } from '../native/references';

import { AFGBuildableGenerator } from './AFGBuildableGenerator';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';
import { UFGReplicationDetailInventoryComponent } from './UFGReplicationDetailInventoryComponent';

export interface AFGBuildableGeneratorFuel extends AFGBuildableGenerator {
  /**
   * Maintainer of the active storage component for this actor. Use this to get the active inventory component.
   */
  mFuelInventoryHandler: UFGReplicationDetailInventoryComponent;

  /**
   * Fuel classes this machine can run on. Leave empty if it does not run on fuel.
   */
  mFuelClasses_DEPRECATED: classReference<UFGItemDescriptor>[];

  /**
   * Fuel classes this machine can run on. Leave empty if it does not run on fuel.
   */
  mDefaultFuelClasses: softClassReference<UFGItemDescriptor>[];

  /**
   * Current fuel classes of the generator, useful for runtime adding of fuel classes
   */
  mAvailableFuelClasses: classReference<UFGItemDescriptor>[];

  /**
   * The form of resource this generator is allowed to accept. ie. SOLID or LIQUID
   */
  mFuelResourceForm: EResourceForm;

  /**
   * Does this generator require a secondary NON fuel source to generate power?
   */
  mRequiresSupplementalResource: boolean;

  /**
   * Required secondary resource class to continue with generation. Tex. Water. Leave empty if none is desired
   */
  mSupplementalResourceClass: classReference<UFGItemDescriptor>;

  mSupplementalLoadAmount: int32;

  /**
   * The quantity of supplemental resource to consume per megawatt of power produced
   */
  mSupplementalToPowerRatio: float;

  /**
   * @todo: Cleanup, this shouldn't need to be replicated, clients should be able to fetch this anyway. Static index of fuel slot?
   */
  mFuelInventory: UFGInventoryComponent;

  /**
   * Cached input connections
   */
  mCachedInputConnections: UFGFactoryConnectionComponent[];

  /**
   * Cached pipe input connections
   */
  mCachedPipeInputConnections: UFGPipeConnectionComponent[];

  /**
   * Amount left of the currently burned piece of fuel. In megawatt seconds (MWs).
   */
  mCurrentFuelAmount: float;

  /**
   * Amount left of the currently loaded supplemental resource. In Liters ( 1 Liquid inventory item = 1 Liter )
   */
  mCurrentSupplementalAmount: float;

  /**
   * Used so clients know how if they have available fuel or not. Could be removed later if we start syncing the production indicator state
   */
  mHasFuelCached: boolean;

  /**
   * Like the mHasFuelCached - Used to notify clients if there is enough supplemental resource available
   */
  mHasSupplementalCached: boolean;

  /**
   * Type of the currently burned piece of fuel.
   */
  mCurrentFuelClass: classReference<UFGItemDescriptor>;
}
