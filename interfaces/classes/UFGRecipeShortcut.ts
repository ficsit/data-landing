import { classReference } from '../native/references';

import { UFGHotbarShortcut } from './UFGHotbarShortcut';
import { UFGRecipe } from './UFGRecipe';

export interface UFGRecipeShortcut extends UFGHotbarShortcut {
  mRecipeToActivate: classReference<UFGRecipe>;
}
