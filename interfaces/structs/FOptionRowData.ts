import { EOptionType } from '../enums/EOptionType';
import { float, int32, localized } from '../native/primitive';

export interface FOptionRowData {
  OptionName: localized;

  OptionType: EOptionType;

  ConsoleVariable: string;

  DefaultCheckBoxValue: boolean;

  MinValue: float;

  MaxValue: float;

  MinDisplayValue: float;

  MaxDisplayValue: float;

  MaxFractionalDigits: int32;

  ShowZeroAsOff: boolean;

  DefaultSliderValue: float;

  IntegerSelectionValues: Record<string, int32>;

  FloatSelectionValues: Record<string, float>;

  DefaultSelectionValue: string;

  UpdateInstantly: boolean;

  RequireRestart: boolean;

  Tooltip: localized;
}
