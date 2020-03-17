import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';
import { FDismantleRefunds } from '../structs/FDismantleRefunds';

export interface UFGBuildGunStateDismantle {
  /**
   * Delegate for when the refunds used to preview dismantle refunds have been updated on local machine
   */
  OnPeekRefundsChanged: Unknown<'FOnDismantleRefundsChanged'>;

  OnPendingDismantleActorsChanged: Unknown<'FOnPendingDismantleActorListChanged'>;

  OnMultiDismantleStateChanged: Unknown<'FOnMultiDismantleStateChanged'>;

  /**
   * Currently selected dismantable actor
   */
  mCurrentlySelectedActor: AActor;

  /**
   * The actor to dismantle (simulated locally on client).
   */
  mPendingDismantleActors: AActor[];

  /**
   * Cached dismantle refunds on server that is replicated
   */
  mPeekDismantleRefund: FDismantleRefunds;
}
