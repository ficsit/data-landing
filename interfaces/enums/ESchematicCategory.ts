/**
 * @todo [MODSUPPORT] This should maybe be implemented the same way as UFGBuildCategories?
 */
export enum ESchematicCategory {
  ESC_LOGISTICS,
  ESC_PRODUCTION,
  ESC_EQUIPMENT,
  ESC_ORGANISATION,
}

export const ESchematicCategoryDisplayName = {
  [ESchematicCategory.ESC_LOGISTICS]: 'Logistics',
  [ESchematicCategory.ESC_PRODUCTION]: 'Production',
  [ESchematicCategory.ESC_EQUIPMENT]: 'Equipment',
  [ESchematicCategory.ESC_ORGANISATION]: 'Organisation',
};
