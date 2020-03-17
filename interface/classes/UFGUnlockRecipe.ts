import { classReference } from '../native/references';

import { UFGRecipe } from './UFGRecipe';
import { UFGUnlock } from './UFGUnlock';

export interface UFGUnlockRecipe extends UFGUnlock {
  /**
   * The recipes you get from this unlock
   */
  mRecipes: classReference<UFGRecipe>[];
}
