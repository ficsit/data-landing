import { EStackSize } from '../enums/EStackSize';
import { IFGReplicationDetailActorOwnerInterface } from '../interfaces/IFGReplicationDetailActorOwnerInterface';
import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { float, int32, uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGBuildable } from './AFGBuildable';
import { AFGReplicationDetailActor } from './AFGReplicationDetailActor';
import { UFGInventoryComponent } from './UFGInventoryComponent';
import { UFGPowerInfoComponent } from './UFGPowerInfoComponent';

export interface AFGBuildableFactory
  extends AFGBuildable,
    IFGSignificanceInterface,
    IFGReplicationDetailActorOwnerInterface {
  /**
   * Power consumption of this factory.
   */
  mPowerConsumption: float;

  mPowerConsumptionExponent: float;

  /**
   * Class to use for the power simulation on this factory, this is only used if the building has any FGPowerConnectionComponent attached.
   */
  mPowerInfoClass: classReference<UFGPowerInfoComponent>;

  /**
   * Power simulation info
   */
  mPowerInfo: UFGPowerInfoComponent;

  /**
   * So that you can listen for when power has changed
   */
  mOnHasPowerChanged: Unknown<'FBuildingStateChanged'>;

  /**
   * So that you can listen for when production has changed
   */
  mOnHasProductionChanged: Unknown<'FBuildingStateChanged'>;

  mMinimumProducingTime: float;

  mMinimumStoppedTime: float;

  mTimeSinceStartStopProducing: float;

  /**
   * How many cycles back do we base the productivity on
   */
  mNumCyclesForProductivity: int32;

  /**
   * Set this to true if we want this building to be able to change the production rate potential with the "Slider of Potential"
   */
  mCanChangePotential: boolean;

  /**
   * This is the current potential (overclock, overcharge) of this factory [0..N]
   */
  mCurrentPotential: float;

  /**
   * When ever a production cycle is completed we set the current potential to this value
   */
  mPendingPotential: float;

  /**
   * You can never set the potential to less than this when playing
   */
  mMinPotential: float;

  /**
   * You can never set the potential to more than this when playing
   */
  mMaxPotential: float;

  /**
   * When the player adds another crystal in the inventory we unlock even more potential
   */
  mMaxPotentialIncreasePerCrystal: float;

  /**
   * Item stack size Enum to use as base for how much fluid a Liquid / Gas Item descriptor can be stored on an index in an inventory
   */
  mFluidStackSizeDefault: EStackSize;

  /**
   * Scalar for multiplying the default Stack Size for Fluid Inventory Slots ( 1 is default. 2 == 2
   *  FluidStackSize )
   */
  mFluidStackSizeMultiplier: int32;

  /**
   * The player is able to toggle if production should be paused or not
   */
  mIsProductionPaused: boolean;

  mReplicationDetailActor: AFGReplicationDetailActor;

  /**
   * Event for when ReplicationDetailActors are created. Will only be dispatched if this buildable inherits from the ReplicationDetailActorOwnerInterface.
   */
  OnReplicationDetailActorCreatedEvent: Unknown<'FOnReplicationDetailActorCreated'>;

  /**
   * The input we place a crystal in to unlock the potential
   */
  mInventoryPotential: UFGInventoryComponent;

  /**
   * A bias to the significance value
   */
  mSignificanceBias: float;

  /**
   * How often effect update should update
   */
  mEffectUpdateInterval: float;

  /**
   * A replicated compressed version of the productivity
   */
  mCurrentProductivity: uint8;

  /**
   * Are we producing? Do not set this manually, some delegates and other stuff might not get triggered then.
   */
  mIsProducing: uint8;

  /**
   * If building has power, for more details about the circuitry see mPowerInfo.
   */
  mHasPower: uint8;

  /**
   * Indicates if the factory should be handled by significance manager
   */
  mAddToSignificanceManager: uint8;

  /**
   * The range to keep the factory in significance
   */
  mSignificanceRange: float;
}
