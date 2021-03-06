import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { UFGMessageBase } from '../classes/UFGMessageBase';
import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference, softClassReference } from '../native/references';

export interface FItemFoundData {
  /**
   * Already found or not?
   */
  WasFound: boolean;

  /**
   * Message that should be added when Class is found for the first time
   */
  Messages: classReference<UFGMessageBase>[];

  /**
   * Schematic to unlock ( if any )
   */
  SchematicClass: softClassReference<UFGSchematic>;

  /**
   * Item descriptor we are looking for
   */
  ItemClass: softClassReference<UFGItemDescriptor>;
}
