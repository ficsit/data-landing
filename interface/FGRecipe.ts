import { ItemAmount } from './ItemAmount';
import { ObjectReference } from './references';

export interface FGRecipe {
  mDisplayNameOverride: boolean;
  mDisplayName: string;
  mIngredients: ItemAmount[];
  mProduct: ItemAmount[];
  mManufactoringDuration: 16;
  mProducedIn: ObjectReference[];
}
