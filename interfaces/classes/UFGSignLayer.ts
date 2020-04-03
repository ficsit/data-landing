import { UObject } from '../native/classes';
import { uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FSignPixelColumn } from '../structs/FSignPixelColumn';

import { UFGSignElementData } from './UFGSignElementData';

export interface UFGSignLayer extends UObject, Unknown<'IFGSaveInterface'> {
  /**
   * Layer index, used to determine sorting. Layer 0 is the background layer
   */
  mLayerID: uint8;

  mPixelColumns: FSignPixelColumn[];

  mLayerElements: UFGSignElementData[];

  mPixelDimensions: Unknown<'FVector2D'>;
}
