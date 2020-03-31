import { float } from '../native/primitive';

export interface FViscosityToPuddlePair {
  /**
   * Viscosity for this entry
   */
  Viscosity: float;

  /**
   * Required puddle amount before this fluid viscosity can be moved from a fluid box [ 0 , 1 ] normalized fill amount
   */
  Puddle: float;
}
