import { UFGResearchTree } from '../classes/UFGResearchTree';
import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference } from '../native/references';

export interface FResearchData {
  /**
   * The schematic that holds the research data
   */
  Schematic: classReference<UFGSchematic>;

  /**
   * The research tree that initiated the research
   */
  InitiatingResearchTree: classReference<UFGResearchTree>;

  PendingRewards: classReference<UFGSchematic>[];
}
