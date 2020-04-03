import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGSubsystem } from './AFGSubsystem';
import { UFGRecipe } from './UFGRecipe';

export interface AFGRecipeManager extends AFGSubsystem, Unknown<'IFGSaveInterface'> {
  /**
   * All recipes that are available to the producers, i.e. build gun, workbench, manufacturers etc.
   */
  mAvailableRecipes: classReference<UFGRecipe>[];
}
