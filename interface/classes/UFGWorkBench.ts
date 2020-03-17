import { IFGRecipeProducerInterface } from '../interfaces/IFGRecipeProducerInterface';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGManufacturingButton } from './UFGManufacturingButton';
import { UFGRecipe } from './UFGRecipe';

export interface UFGWorkBench extends Unknown<'USceneComponent'>, IFGRecipeProducerInterface {
  /**
   * The recipe we're currently running.
   */
  mCurrentRecipe: classReference<UFGRecipe>;

  /**
   * Manufacturing progress in range [0,1].
   */
  mCurrentManufacturingProgress: float;

  /**
   * The speed of which this manufacturer manufactures stuff. Slower for Work Bench
   */
  mManufacturingSpeed: float;

  mPlayerWorkingAtBench: AFGCharacterPlayer;

  /**
   * Manufacturing rate in product per second.
   */
  mRecipeRate: float;

  /**
   * Are we producing?
   */
  mIsProducing: boolean;

  /**
   * The inventory this workbench is set to work with
   */
  mInventory: UFGInventoryComponent;

  /**
   * Work bench efficiency decrease per interval. 0.2 means 20%
   */
  mFatigueMultiplier: float;

  /**
   * Multiplier for mFatigueUpdaterInterval, shows how long it takes to go down one step in fatigue
   */
  mFatigueDecreaseSpeedMultiplier: float;

  /**
   * How long it takes to produce one cycle
   */
  mHoldProduceTime: float;

  mManufacturingButton: UFGManufacturingButton;

  /**
   * at what interval should the fatigue multiplier be applied?
   */
  mFatigueUpdaterInterval: int32;

  /**
   * DUration it takes to make a recipe with added multipliers of manufacturingspeed and manufacturingmultiplier
   */
  mRecipeDuration: float;

  /**
   * How long to wait before applying cooldown
   */
  mCooldownDelay: float;

  /**
   * Should fatigue be used on this component
   */
  mIsFatigueEnabled: boolean;
}
