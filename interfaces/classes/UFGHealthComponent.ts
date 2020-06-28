import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGHealthComponent extends Unknown<'UActorComponent'>, IFGSaveInterface {
  OnTakeAnyDamageDelegate: Unknown<'FTakeAnyDamageDelegate'>;

  OnTakePointDamageDelegate: Unknown<'FTakePointDamageSignature'>;

  OnTakeRadialDamageDelegate: Unknown<'FTakeRadialDamageSignature'>;

  /**
   * SERVER ONLY: Called when we die
   */
  DeathDelegate: Unknown<'FDeathDelegate'>;

  HealDelegate: Unknown<'FHealDelegate'>;

  /**
   * Interested listeners for the adjust damage delegates
   */
  mOnAdjustDamage: Unknown<'FAdjustDamageDelegate'>[];

  /**
   * Our maximum health
   */
  mMaxHealth: float;

  /**
   * Our current health
   */
  mCurrentHealth: float;

  /**
   * Scale of max health to use when respawning
   */
  mRespawnHealthFactor: float;

  /**
   * If true, then we are dead. This is replicated to clients and they get the death event based on this.
   */
  mIsDead: uint8;

  /**
   * If true, then the client will trigger the following events: OnTakeAnyDamageDelegate, OnTakePointDamageDelegate, OnTakeRadialDamageDelegate
   */
  mReplicateDamageEvents: uint8;

  /**
   * If true, then the client will trigger the following event: DeathDelegate
   */
  mReplicateDeathEvents: uint8;
}
