import { UFGRecipe } from '../classes/UFGRecipe';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

import { FMaterialFlowConnection } from './FMaterialFlowConnection';

export interface FMaterialFlowNode {
  /**
   * Recipe analyzed, nullptr for leaf nodes.
   */
  Recipe: classReference<UFGRecipe>;

  /**
   * At which depth in the dependency tree is this item, root is 0.
   */
  Depth: int32;

  /**
   * How many producers are needed for this recipe.
   */
  ProducerCount: int32;

  /**
   * Parent flow nodes, 0 for root nodes.
   */
  Outputs: FMaterialFlowConnection[];

  /**
   * Child flow nodes, 0 for leaf nodes.
   */
  Inputs: FMaterialFlowConnection[];
}
