import { UFGResearchRecipe } from '../classes/UFGResearchRecipe';
import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference } from '../native/references';

import { FItemAmount } from './FItemAmount';

export interface FResearchRecipeReward {
  Products: FItemAmount[];

  ResearchRecipes: classReference<UFGResearchRecipe>[];

  Schematics: classReference<UFGSchematic>[];
}
