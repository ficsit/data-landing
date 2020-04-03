import { UFGResourceDescriptor } from '../classes/UFGResourceDescriptor';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FResourceDepositPackage {
  /**
   * Chance in roulette selection to get the package
   */
  DropChance: float;

  /**
   * What resource class to use
   */
  ResourceClass: classReference<UFGResourceDescriptor>;

  /**
   * Amount of resources in deposit as minimum
   */
  MinAmount: int32;

  /**
   * Amount of resources in deposit as max
   */
  MaxAmount: int32;

  /**
   * How much to get per "mine cycle"
   */
  MiningAmount: int32;
}
