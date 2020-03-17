import { ESchematicCategory } from '../enums/ESchematicCategory';
import { classReference } from '../native/references';

import { UFGSchematicCategory } from './UFGSchematicCategory';
import { UFGUnlockArmEquipmentSlot } from './UFGUnlockArmEquipmentSlot';
import { UFGUnlockBuildEfficiency } from './UFGUnlockBuildEfficiency';
import { UFGUnlockBuildOverclock } from './UFGUnlockBuildOverclock';
import { UFGUnlockInventorySlot } from './UFGUnlockInventorySlot';
import { UFGUnlockMap } from './UFGUnlockMap';
import { UFGUnlockRecipe } from './UFGUnlockRecipe';
import { UFGUnlockScannableResource } from './UFGUnlockScannableResource';

export interface UFGDeveloperSettings {
  mGreedyFocusInPIE: boolean;

  mUnlockRecipeClass: classReference<UFGUnlockRecipe>;

  mUnlockScannerResourceClass: classReference<UFGUnlockScannableResource>;

  mUnlockMapClass: classReference<UFGUnlockMap>;

  mUnlockBuildEfficiencyClass: classReference<UFGUnlockBuildEfficiency>;

  mUnlockBuildOverclockClass: classReference<UFGUnlockBuildOverclock>;

  mUnlockInvetorySlotClass: classReference<UFGUnlockInventorySlot>;

  mUnlockArmEquipmentClass: classReference<UFGUnlockArmEquipmentSlot>;

  mSchematicCategoryMigrationData: Record<ESchematicCategory, classReference<UFGSchematicCategory>>;
}