import { IFGRecipeProducerInterface } from '../interfaces/IFGRecipeProducerInterface';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGBuildableFactory } from './AFGBuildableFactory';
import { UFGFactoryConnectionComponent } from './UFGFactoryConnectionComponent';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPipeConnectionComponent } from './UFGPipeConnectionComponent';
import { UFGRecipe } from './UFGRecipe';

export interface AFGBuildableManufacturer extends AFGBuildableFactory, IFGRecipeProducerInterface {
  /**
   * Called when a new recipe has been set.
   */
  mCurrentRecipeChanged: Unknown<'FOnNewRecipeDelegate'>;

  /**
   * The speed of which this building manufacture recipes, this is a multiplier to the recipe speed
   */
  mManufacturingSpeed: float;

  /**
   * Manufacturing progress in range [0,1].
   */
  mCurrentManufacturingProgress: float;

  /**
   * Our input inventory, shared for all input connections.
   */
  mInputInventory: UFGInventoryComponent;

  /**
   * Cached factory input connections
   */
  mFactoryInputConnections: UFGFactoryConnectionComponent[];

  /**
   * Cached input pipe connections
   */
  mPipeInputConnections: UFGPipeConnectionComponent[];

  /**
   * Cached factory output connections
   */
  mFactoryOutputConnections: UFGFactoryConnectionComponent[];

  /**
   * Cached output pipe connections
   */
  mPipeOutputConnections: UFGPipeConnectionComponent[];

  /**
   * Our output inventory, shared for all output connections.
   */
  mOutputInventory: UFGInventoryComponent;

  /**
   * The recipe we're currently running.
   */
  mCurrentRecipe: classReference<UFGRecipe>;
}
