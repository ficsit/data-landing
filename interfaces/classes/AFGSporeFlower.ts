import { IFGExplosiveDestroyableInterface } from '../interfaces/IFGExplosiveDestroyableInterface';
import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

/**
 * todo: (a bigish one) this is just a start of what should be a much more complete nativization of the spore flower
 */
export interface AFGSporeFlower
  extends AActor,
    Unknown<'IFGSaveInterface'>,
    IFGSignificanceInterface,
    IFGExplosiveDestroyableInterface {
  /**
   * These actor types will trigger the spore flower to emit
   */
  mTriggerActorClasses: classReference<AActor>[];

  /**
   * Holds a list of all actors inside trigger spehere
   */
  mTriggerActors: AActor[];
}
