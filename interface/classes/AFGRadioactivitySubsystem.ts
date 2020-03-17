import { AActor, UObject } from '../native/classes';
import { FRadioactiveSource } from '../structs/FRadioactiveSource';

export interface AFGRadioactivitySubsystem {
  /**
   * All the radioactive sources.
   */
  mSources: Record<UObject, FRadioactiveSource>;

  /**
   * All actors that can take damage from radiation.
   */
  mAffectedActors: AActor[];
}
