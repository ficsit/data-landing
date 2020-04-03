import { float } from '../native/primitive';

export interface FAudioVolumeMap {
  /**
   * Name of the RTPC that this maps to
   */
  Name: string;

  /**
   * The stored value of the RTPC
   */
  Value: float;
}
