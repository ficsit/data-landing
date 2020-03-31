import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface AFGCrashSiteDebrisActor extends AActor, IFGSignificanceInterface {
  mMesh: Unknown<'UStaticMeshComponent'>;
}
