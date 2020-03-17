import { UFGMessageBase } from '../classes/UFGMessageBase';
import { EGamePhase } from '../enums/EGamePhase';
import { int32, localized } from '../native/primitive';
import { classReference } from '../native/references';

export interface FPhaseTierInfo {
  /**
   * The phase to specify tier for
   */
  GamePhase: EGamePhase;

  /**
   * What is the last tier of the phase specified previously.
   */
  LastTierOfPhase: int32;

  /**
   * Name of this phase.
   */
  Name: localized;

  /**
   * Message sent when this phase is unlocked
   */
  PhaseUnlockedMessage: classReference<UFGMessageBase>;
}
