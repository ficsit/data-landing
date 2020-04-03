import { UObject } from '../native/classes';
import { float, localized } from '../native/primitive';
import { classReference } from '../native/references';
import { FItemAmount } from '../structs/FItemAmount';

export interface UFGRecipe extends UObject {
  /**
   * If we override the display name or get it from the first products item name.
   */
  mDisplayNameOverride: boolean;

  /**
   * Overridden name for this recipe, if mDisplayNameOverride is false the first product's item name is used.
   */
  mDisplayName: localized;

  /**
   * Ingredients needed to produce the products.
   */
  mIngredients: FItemAmount[];

  /**
   * The products produced from this recipe.
   */
  mProduct: FItemAmount[];

  /**
   * The time it takes to produce the output.
   */
  mManufactoringDuration: float;

  /**
   * The time it takes to produce the output.
   */
  mManualManufacturingMultiplier: float;

  /**
   * Defines where this recipe can be produced
   */
  mProducedIn: classReference<UObject>[];
}
