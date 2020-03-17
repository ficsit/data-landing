import { float } from '../native/primitive';

export interface AFGPipeHyperStart {
  mOpeningOffset: float;

  /**
   * Could be exploited if made too big, but it felt better and clearer feedback about slowdowns if it was a little above the usual min speed when doing initial tests.
   */
  mInitialMinSpeedFactor: float;
}
