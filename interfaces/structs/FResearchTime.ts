import { float } from '../native/primitive';

import { FResearchData } from './FResearchData';

export interface FResearchTime {
  /**
   * The research entry that contains data about the research conducted
   */
  ResearchData: FResearchData;

  /**
   * The time stamp for when the research is completed. When saved it represents how much time is left for research
   */
  ResearchCompleteTimestamp: float;
}
