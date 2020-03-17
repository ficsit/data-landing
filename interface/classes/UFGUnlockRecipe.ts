import { classReference } from '../native/references';

import { UFGRecipe } from './UFGRecipe';

export interface UFGUnlockRecipe {
  /**
   * The recipes you get from this unlock
   */
  mRecipes: classReference<UFGRecipe>[];
}
