import { localized, uint8 } from '../native/primitive';

import { FHotbar } from './FHotbar';

export interface FPresetHotbar {
  PresetName: localized;

  /**
   * The shortcut in the hotbar with this index will decide the icon for the preset
   */
  IconIndex: uint8;

  /**
   * The hotbar shortcuts for this preset
   */
  Hotbar: FHotbar;
}
