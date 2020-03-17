import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

export interface FCostIngredientEffectActorInfo {
  /**
   * What class is this cost of
   */
  ItemClass: classReference<UFGItemDescriptor>;

  /**
   * Delay between this and the previous cost actor spawned
   */
  SpawnDelay: float;

  /**
   * Where this cost actor should travel to
   */
  TargetLocation: Vector;
}
