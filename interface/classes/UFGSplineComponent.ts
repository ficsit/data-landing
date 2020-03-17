import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface UFGSplineComponent {
  /**
   * The mesh to repeat on curved sections.
   */
  mSplineMesh: UStaticMesh;

  /**
   * The size of each spline mesh.
   */
  mSplineMeshLength: float;

  /**
   * Spacing between the collision components.
   */
  mGenerateCollisions: boolean;

  /**
   * Spacing between the collision components.
   */
  mCollisionSpacing: float;

  /**
   * Extent of the collision components. X is forward.
   */
  mCollisionExtent: Vector;

  /**
   * Offset of the collision components. X is forward.
   */
  mCollisionOffset: Vector;

  /**
   * The cached material, we cache this as the number of meshes grow/shrink as we drag the conveyor belt.
   */
  mOverrideMaterial: Unknown<'UMaterialInterface'>;

  /**
   * Whether to use instancing or not.
   */
  mUseInstancing: boolean;

  /**
   * The meshes that make up the spline.
   */
  mSplineMeshComponents: Unknown<'USplineMeshComponent'>[];

  /**
   * If we have enabled custom depth pass, then we store the custom depth spline meshes here
   */
  mCustomDepthSplineMeshComponents: Unknown<'USplineMeshComponent'>[];

  /**
   * The meshes that make up the spline when instanced.
   */
  mSplineMeshInstances: Unknown<'UFGInstancedSplineMeshComponent'>;

  /**
   * If we have enabled custom depth pass, this will be non-null
   */
  mCustomDepthSplineMeshInstances: Unknown<'UFGInstancedSplineMeshComponent'>;

  /**
   * The collisions that make up the spline.
   */
  mSplineCollisionComponents: Unknown<'UShapeComponent'>[];
}
