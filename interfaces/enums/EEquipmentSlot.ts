/**
 * Equipments are equip on different slots on the player. One EQ per slot. These are the slots.
 */
export enum EEquipmentSlot {
  ES_NONE,
  ES_ARMS,
  ES_BACK,
  ES_MAX,
}

export const EEquipmentSlotDisplayName = {
  [EEquipmentSlot.ES_NONE]: 'Please specify a slot.',
  [EEquipmentSlot.ES_ARMS]: 'Arms',
  [EEquipmentSlot.ES_BACK]: 'Body',
  [EEquipmentSlot.ES_MAX]: '<ES_MAX>',
};
