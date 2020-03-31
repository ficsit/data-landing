import { float } from '../native/primitive';

/**
 * Distances where we switch tick rate
 */
export interface FDistanceBasedTickRate {
  Distance: float;

  TickRate: float;
}
