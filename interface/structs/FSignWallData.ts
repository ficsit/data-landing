import { int32 } from '../native/primitive';

export interface FSignWallData {
  /**
   * Index of the selected color for the text from the FGSignSettings color data array
   */
  TextColorIndex: int32;

  /**
   * Index of the selected color for the background from the FGSignSettings color data array
   */
  BackgroundColorIndex: int32;

  /**
   * Text to be displayed on the sign
   */
  SignText: string;
}
