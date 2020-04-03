import { UFGRecipe } from '../classes/UFGRecipe';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FRecipeAmountPair {
  /**
   * Recipe to give player
   */
  Recipe: classReference<UFGRecipe>;

  /**
   * How many of given recipe
   */
  Amount: int32;
}
