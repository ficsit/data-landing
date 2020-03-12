import { ItemAmount } from '../structs/ItemAmount';
import { ObjectReference } from '../references';

export interface FGRecipe {
  mDisplayNameOverride: boolean;
  mDisplayName: string;
  mIngredients: ItemAmount[];
  mProduct: ItemAmount[];
  mManufactoringDuration: number;
  mProducedIn: ObjectReference[];
}
