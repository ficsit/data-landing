import { UFGMessageBase } from '../classes/UFGMessageBase';
import { UFGSchematic } from '../classes/UFGSchematic';
import { classReference, softClassReference } from '../native/references';

export interface FSchematicMessagePair {
  /**
   * Message to display
   */
  Messages: classReference<UFGMessageBase>[];

  /**
   * Associated schematic
   */
  SchematicUnlocked: softClassReference<UFGSchematic>;
}
