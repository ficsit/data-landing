import { AFGResourceNode } from '../classes/AFGResourceNode';
import { UFGResourceDescriptor } from '../classes/UFGResourceDescriptor';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

/**
 * Holds information about resource node clusters. This could be saved in actors on the level for optimization.
 */
export interface FNodeClusterData {
  /**
   * Cost of schematic if there are more than once item in this array the true cost will be randomly selected.
   */
  Nodes: AFGResourceNode[];

  /**
   * The average location of all the nodes
   */
  MidPoint: Vector;

  /**
   * The resource descriptor of this cluster
   */
  ResourceDescriptor: classReference<UFGResourceDescriptor>;
}
