import { uint8 } from '../native/primitive';

/**
 * Disable snapping on specific sides.
 */
export interface FFoundationSideSelectionFlags {
  Front: uint8;

  Right: uint8;

  Back: uint8;

  Left: uint8;

  Top: uint8;

  Bottom: uint8;
}
