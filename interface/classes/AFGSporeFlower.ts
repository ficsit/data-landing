import { AActor } from '../native/classes';
import { classReference } from '../native/references';

/**
 * todo: (a bigish one) this is just a start of what should be a much more complete nativization of the spore flower
 */
export interface AFGSporeFlower {
  /**
   * These actor types will trigger the spore flower to emit
   */
  mTriggerActorClasses: classReference<AActor>[];

  /**
   * Holds a list of all actors inside trigger spehere
   */
  mTriggerActors: AActor[];
}
