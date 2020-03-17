import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FResearchData } from '../structs/FResearchData';
import { FResearchTime } from '../structs/FResearchTime';

import { UFGResearchTree } from './UFGResearchTree';

export interface AFGResearchManager {
  /**
   * Called when a research recipe is started
   */
  ResearchStartedDelegate: Unknown<'FResearchStartedDelegate'>;

  /**
   * Called when ongoing research has completed
   */
  ResearchCompletedDelegate: Unknown<'FResearchCompletedDelegate'>;

  /**
   * Called when research state has changed
   */
  ResearchStateChangedDelegate: Unknown<'FResearchStateChangedDelegate'>;

  /**
   * Called when research results are collected from completed research
   */
  ResearchResultsClaimedDelegate: Unknown<'FResearchResultsClaimed'>;

  /**
   * Called when research trees are unlocked
   */
  ResearchTreeUnlockedDelegate: Unknown<'FResearchTreeUnlocked'>;

  /**
   * Whether multiple concurrent research can be conducted, or only one at a time.
   */
  mCanConductMultipleResearch: boolean;

  mAllResearchTrees: classReference<UFGResearchTree>[];

  mUnlockedResearchTrees: classReference<UFGResearchTree>[];

  /**
   * What research has been conducted and is complete.
   */
  mCompletedResearch: FResearchData[];

  /**
   * What research that is currently being analyzed. i.e. that has started their timer and is ticking down.
   */
  mOngoingResearch: FResearchTime[];

  /**
   * Used save the current ongoing research, saved research is restarted on load
   */
  mSavedOngoingResearch: FResearchTime[];
}
