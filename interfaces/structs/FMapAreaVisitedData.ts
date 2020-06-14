import { UFGMapArea } from '../classes/UFGMapArea';
import { UFGMessageBase } from '../classes/UFGMessageBase';
import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference, softClassReference } from '../native/references';

export interface FMapAreaVisitedData {
  /**
   * Map area class we are looking for
   */
  MapAreaClass: classReference<UFGMapArea>;

  /**
   * Message that should be added when MapAreaClass is found for the first time
   */
  Messages: classReference<UFGMessageBase>[];

  /**
   * Schematic to unlock ( if any )
   */
  SchematicClass: softClassReference<UFGSchematic>;
}
