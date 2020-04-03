import { UFGRecipe } from '../classes/UFGRecipe';
import { classReference } from '../native/references';

export interface FSplineSupportPair {
  /**
   * What recipe to use for the spline support
   */
  SplineSupportRecipeClass: classReference<UFGRecipe>;

  /**
   * What recipe to use for the spline
   */
  SplineRecipeClass: classReference<UFGRecipe>;
}
