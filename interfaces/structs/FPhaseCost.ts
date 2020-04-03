import { EGamePhase } from '../enums/EGamePhase';

import { FItemAmount } from './FItemAmount';

export interface FPhaseCost {
  /**
   * The phase to specify the cost for
   */
  GamePhase: EGamePhase;

  /**
   * Cost of this tier
   */
  Cost: FItemAmount[];
}
