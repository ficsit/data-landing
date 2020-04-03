import { float } from '../native/primitive';
import { Vector } from '../native/structs';

export interface FItemView {
  /**
   * The distance to the object when creating it's view
   */
  Distance: float;

  /**
   * Where should the camera focus offsetted on the mesh
   */
  FocalOffset: Vector;

  /**
   * How much "down or up" the camera should be angeled (in degrees) when crating the view
   */
  CameraPitch: float;
}
