import { UFGMessageBase } from '../classes/UFGMessageBase';
import { UFGResearchTree } from '../classes/UFGResearchTree';
import { classReference, softClassReference } from '../native/references';

export interface FResearchTreeMessageData {
  /**
   * Message to display
   */
  Messages: classReference<UFGMessageBase>[];

  /**
   * Associated research tree
   */
  ResearchTree: softClassReference<UFGResearchTree>;
}
