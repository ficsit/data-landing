import { float } from '../native/primitive';

export interface FCouplerSetup {
  /**
   * Bone name on mesh where the coupler's base is attached.
   */
  BoneName: string;

  /**
   * How long is the couplers arm, from the bone to the point where is attaches to the other coupler.
   */
  Length: float;
}
