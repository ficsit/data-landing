import { UFGMapArea } from '../classes/UFGMapArea';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Color } from '../native/structs';

export interface FColorMapAreaPair {
  PaletteColor: Color;

  MapArea: classReference<UFGMapArea>;

  /**
   * A top left pixel that together with MaxX/MaxY encompasses the entire area
   */
  MinX: int32;

  MinY: int32;

  MaxX: int32;

  MaxY: int32;
}
