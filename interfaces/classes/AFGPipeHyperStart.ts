import { float } from '../native/primitive';

import { AFGBuildablePipeHyperPart } from './AFGBuildablePipeHyperPart';

export interface AFGPipeHyperStart extends AFGBuildablePipeHyperPart {
  mOpeningOffset: float;

  /**
   * Could be exploited if made too big, but it felt better and clearer feedback about slowdowns if it was a little above the usual min speed when doing initial tests.
   */
  mInitialMinSpeedFactor: float;
}
