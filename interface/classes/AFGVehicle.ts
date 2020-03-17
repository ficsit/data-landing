import { float, localized, uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { LinearColor, Vector } from '../native/structs';
import { Unknown } from '../native/unknown';
import { FNetConstructionID } from '../structs/FNetConstructionID';
import { FVehiclePhysicsData } from '../structs/FVehiclePhysicsData';

import { AFGHologram } from './AFGHologram';
import { UFGDamageType } from './UFGDamageType';
import { UFGHealthComponent } from './UFGHealthComponent';
import { UFGRecipe } from './UFGRecipe';

export interface AFGVehicle {
  /**
   * The human readable name for this vehicle.
   */
  mDisplayName: localized;

  /**
   * The human readable description for this vehicle.
   */
  mDescription: localized;

  /**
   * Hologram to build this class with.
   */
  mHologramClass: classReference<AFGHologram>;

  /**
   * The main skeletal mesh associated with this Vehicle
   */
  mMesh: Unknown<'USkeletalMeshComponent'>;

  /**
   * Keeps track of our current health
   */
  mHealthComponent: UFGHealthComponent;

  /**
   * If any of these locations enters water, then we are unusable
   */
  mDisabledByWaterLocations: Vector[];

  /**
   * ID given from server when constructed. Has not been assigned a value by server if 0.
   */
  mNetConstructionID: FNetConstructionID;

  /**
   * Recipe this vehicle was built with, e.g. used for refunds and stats.
   */
  mBuiltWithRecipe: classReference<UFGRecipe>;

  /**
   * The primary color of this buildable
   */
  mPrimaryColor: LinearColor;

  /**
   * The primary color of this buildable
   */
  mSecondaryColor: LinearColor;

  /**
   * If this vehicle is self driving.
   */
  mIsSelfDriving: boolean;

  /**
   * The AI that controls this vehicle when self-driving is activated.
   */
  mSelfDrivingController: Unknown<'AAIController'>;

  /**
   * Saved like this, as we can't store it in serialize, as it will be killed
   */
  mStoredPhysicsData: FVehiclePhysicsData[];

  /**
   * Sound played when this vehicle is created
   */
  mConstructSound: Unknown<'UAkAudioEvent'>;

  /**
   * Can this vehicle be destroyed by damage?
   */
  mIsDestructible: uint8;

  /**
   * If true, then we are submerged in water
   */
  mIsSubmergedInWater: uint8;

  /**
   * increased angular damping when vehicle is under water
   */
  mSubmergedAngularDamping: float;

  /**
   * increased linear damping when vehicle is under water
   */
  mSubmergedLinearDamping: float;

  /**
   * upwards force applied to vehicles when underwater
   */
  mSubmergedBouyantForce: float;

  /**
   * Gas damage typ that should be redirected to the driver
   */
  mGasDamageType: classReference<UFGDamageType>;

  /**
   * A bias to the significance value
   */
  mSignificanceBias: float;

  /**
   * Indicates if the vehicle should be handled by significance manager
   */
  mAddToSignificanceManager: uint8;

  /**
   * Range that this vehicle should be significant within
   */
  mSignificanceRange: float;
}
