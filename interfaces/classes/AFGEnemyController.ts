import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { ScriptInterface, classReference, softClassReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FAggroEntry } from '../structs/FAggroEntry';

import { AFGCreatureController } from './AFGCreatureController';
import { UFGAttack } from './UFGAttack';

export interface AFGEnemyController extends AFGCreatureController {
  /**
   * Specifies how often we need to update all aggro
   */
  mUpdateAggroInterval: float;

  /**
   * How long time should it take to lose all aggro from damage
   */
  mTimeToLoseAllAggro: float;

  /**
   * The highest aggro for all aggro targets
   */
  mAggroTargetsAggroMax: float;

  /**
   * Aggro weigths
   */
  mAggroBaseWeight: float;

  mAggroAggroWeight: float;

  mAggroDistanceWeight: float;

  /**
   * All actors that this actor can aggro to
   */
  mAggroEntries: FAggroEntry[];

  /**
   * All actors that this actor can aggro to sorted by desirability in DESC ( index 0 is most desirable)
   */
  mSortedAggroEntries: FAggroEntry[];

  /**
   * We only switch mCurrentTarget if the new targets desirablility is this factor larger than the old one.
   */
  mTargetSwitchFactor: float;

  /**
   * How long should the targets be on the ignore list
   */
  mDefaultIgnoreCooldown: float;

  /**
   * We want static actors to be ignored a long time
   */
  mStaticIgnoreCooldown: float;

  /**
   * Curve for determining the distance aggro added
   */
  mAggroDistanceCurve: Unknown<'UCurveFloat'>;

  /**
   * Minimum aggro the enemy needs to add a target to its aggro list
   */
  mGainAggroThreshold: float;

  /**
   * if aggro goes below this value the target is invalid
   */
  mLoseAggroThreshold: float;

  mCurrentAggroTarget: ScriptInterface<IFGAggroTargetInterface>;

  /**
   * Array with attacks that determine order of attacks
   */
  mAttackPattern: classReference<UFGAttack>[];

  /**
   * List of aggro target classes that we should not aggro against
   */
  mIgnoredAggroTargetClasses: softClassReference<AActor>[];

  /**
   * Time we should ignore targets when panicking
   */
  mPanicIgnoreTime: float;
}
