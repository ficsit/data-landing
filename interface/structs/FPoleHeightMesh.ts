import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';

export interface FPoleHeightMesh {
  /**
   * Mesh for the current pole height.
   */
  Mesh: UStaticMesh;

  /**
   * Pole height for the current mesh.
   */
  Height: float;
}
