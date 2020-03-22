import { EGamePhase } from '../enums/EGamePhase';
import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { Unknown } from '../native/unknown';
import { FPhaseCost } from '../structs/FPhaseCost';
import { FPhaseTierInfo } from '../structs/FPhaseTierInfo';

import { AFGSubsystem } from './AFGSubsystem';

export interface AFGGamePhaseManager extends AFGSubsystem, IFGSaveInterface {
  /**
   * Current GamePhase
   */
  mGamePhase: EGamePhase;

  /**
   * Specifies what game phases are connected to what tiers
   */
  mGamePhaseTierInfo: FPhaseTierInfo[];

  /**
   * Speciefies what the different tiers cost
   */
  mGamePhaseCosts: FPhaseCost[];

  /**
   * Called when the game phase is updated
   */
  mOnGamePhaseChanged: Unknown<'FOnGamePhaseUpdated'>;
}
