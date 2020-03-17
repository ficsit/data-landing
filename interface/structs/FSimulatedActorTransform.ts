import { AFGCrashSiteDebrisActor } from '../classes/AFGCrashSiteDebrisActor';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FSimulatedActorTransform {
  ActorClass: classReference<AFGCrashSiteDebrisActor>;

  ActorTransform: Unknown<'FTransform'>;
}
