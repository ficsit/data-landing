import { classReference } from '../native/references';

import { UFGRecipe } from './UFGRecipe';

export interface AFGRecipeManager {
  /**
   * All recipes that are available to the producers, i.e. build gun, workbench, manufacturers etc.
   */
  mAvailableRecipes: classReference<UFGRecipe>[];
}
