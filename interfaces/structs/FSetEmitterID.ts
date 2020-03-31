import { UObject } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface FSetEmitterID {
  Owner: UObject;

  AttachRoot: Unknown<'USceneComponent'>;
}
