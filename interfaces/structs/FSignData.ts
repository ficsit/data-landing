import { UFGSignElementData } from '../classes/UFGSignElementData';
import { UFGSignLayer } from '../classes/UFGSignLayer';
import { int32 } from '../native/primitive';

export interface FSignData {
  /**
   * All additional layers in this sign. Each layer holds an array of all elements in that layer
   */
  SignLayers: UFGSignLayer[];

  /**
   * All sign elements in this sign
   */
  SignElementData: UFGSignElementData[];

  /**
   * Index of the selected color for the background from the FGSignSettings color data array
   */
  BackgroundColorIndex: int32;
}
