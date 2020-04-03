import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FFGAnimNode_RandomPlayer extends Unknown<'FAnimNode_RandomPlayer'> {
  /**
   * Play Rate for the sequence
   */
  mPlayRate: float;
}
