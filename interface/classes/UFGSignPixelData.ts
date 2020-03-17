import { Unknown } from '../native/unknown';

import { UFGSignElementData } from './UFGSignElementData';

export interface UFGSignPixelData extends UFGSignElementData {
  mDimensions: Unknown<'FVector2D'>;
}
