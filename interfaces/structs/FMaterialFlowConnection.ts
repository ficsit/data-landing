import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FMaterialFlowConnection {
  /**
   * Details about the material flow in this step.
   */
  Descriptor: classReference<UFGItemDescriptor>;

  /**
   * Base count. [items/cycle]
   */
  Count: int32;

  /**
   * Base flow. [items/second]
   */
  Flow: float;

  /**
   * Total count. [items/cycle]
   */
  TotalCount: int32;

  /**
   * Total flow. [items/second]
   */
  TotalFlow: float;
}
