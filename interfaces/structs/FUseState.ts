import { UFGUseState } from '../classes/UFGUseState';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface FUseState {
  /**
   * Additional data that might be heavy to calculate several times the same frame, the reason it's cached here and not in the object, is that several players might want to cache different things
   */
  AdditionalData: UFGUseState;

  /**
   * Location of where the use happens
   */
  UseLocation: Vector;

  /**
   * Component that triggered the use
   */
  UseComponent: Unknown<'UPrimitiveComponent'>;

  /**
   * Contains the usable state of the object, might be a error code
   */
  State: classReference<UFGUseState>;
}
