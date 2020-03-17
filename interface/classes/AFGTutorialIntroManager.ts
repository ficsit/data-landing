import { EIntroTutorialSteps } from '../enums/EIntroTutorialSteps';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FRecipeAmountPair } from '../structs/FRecipeAmountPair';
import { FTutorialHintData } from '../structs/FTutorialHintData';

import { AFGBuildableTradingPost } from './AFGBuildableTradingPost';
import { AFGStartingPod } from './AFGStartingPod';
import { UFGBuildingDescriptor } from './UFGBuildingDescriptor';
import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGSchematic } from './UFGSchematic';

export interface AFGTutorialIntroManager {
  /**
   * Called when mHasCompletedIntroSequence updates
   */
  mOnIntroSequenceStateUpdated: Unknown<'FIntroSequenceStateUpdate'>;

  /**
   * Has a trading post been built
   */
  mTradingPostBuilt: boolean;

  /**
   * Array of pending tutorial IDs that should be shown when possible ( no other widgets on screen etc )
   */
  mPendingTutorial: EIntroTutorialSteps;

  /**
   * Indicates if the player has completed the introduction tutorial
   */
  mHasCompletedIntroTutorial: boolean;

  /**
   * Indicates that the introduction sequence is done (right now, drop pod sequence)
   */
  mHasCompletedIntroSequence: boolean;

  /**
   * The class of the trading post
   */
  mTradingPostDescriptor: classReference<UFGBuildingDescriptor>;

  /**
   * Cached reference of trading post
   */
  mTradingPost: AFGBuildableTradingPost;

  /**
   * Data used for the intro tutorial
   */
  mIntroTutorialData: FTutorialHintData[];

  /**
   * Class of Iron Resource Descriptor
   */
  mIronOreDescriptor: classReference<UFGItemDescriptor>;

  mDidPickUpIronOre: boolean;

  /**
   * An item you receive when dismantling the drop pod so we can identify it
   */
  mDropPodItemClass: classReference<UFGItemDescriptor>;

  /**
   * Checks if we have dismantled the drop pod
   */
  mDidDismantleDropPod: boolean;

  /**
   * class to identify the stun spear
   */
  mStunSpearItemClass: classReference<UFGItemDescriptor>;

  /**
   * Checks if we equipped the stun spear
   */
  mDidEquipStunSpear: boolean;

  /**
   * Reference to the class step 1 tutorial schematic
   */
  mStep1UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step 1 schematic
   */
  mDidStep1Upgrade: boolean;

  /**
   * Reference to the class step 1.5 tutorial schematic
   */
  mStep1_5UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step 1.5 schematic
   */
  mDidStep1_5Upgrade: boolean;

  /**
   * Reference to the class step 2 tutorial schematic
   */
  mStep2UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step 2 schematic
   */
  mDidStep2Upgrade: boolean;

  /**
   * Reference to the class step 3 tutorial schematic
   */
  mStep3UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step 3 schematic
   */
  mDidStep3Upgrade: boolean;

  /**
   * Reference to the class step 4 tutorial schematic
   */
  mStep4UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step 4 schematic
   */
  mDidStep4Upgrade: boolean;

  /**
   * Reference to the class step 5 tutorial schematic
   */
  mStep5UpgradeSchematic: classReference<UFGSchematic>;

  /**
   * Bool for the step5 schematic
   */
  mDidStep5Upgrade: boolean;

  /**
   * Class of drop pod to spawn
   */
  mStartingPodClass: classReference<AFGStartingPod>;

  /**
   * Reference to starting pod ( server only )
   */
  mStartingPod: AFGStartingPod;

  /**
   * The upgrade level we have on our trading post
   */
  mTradingPostLevel: int32;

  /**
   * Time to wait after completing a minor tutorial step and displaying the next
   */
  mWaitTimeAfterCompletingMinorStep: float;

  /**
   * Time to wait after completing a trading post step and displaying the next
   */
  mWaitTimeAfterCompletingHubStep: float;

  /**
   * Time required to
   */
  mHoldTimeToSkipIntro: float;

  mHoldToSkipTimerHandle: Unknown<'FTimerHandle'>;

  /**
   * List of recipes that player should get the items of if the player chooses to skip the tutorial
   */
  mRecipesToGivePlayersSkippingTutorial: FRecipeAmountPair[];
}
