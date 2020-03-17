import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface FSharedInventoryStatePtr
  extends Unknown<'SharedPointerInternals::FReferenceControllerBase'> {
  /**
   * The actor we've shared ownership over.
   */
  ActorPtr: AActor;
}
