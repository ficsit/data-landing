import { objectReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FCachedMaterialArray {
  MaterialInterfaces: Unknown<'UMaterialInterface'>[];

  /**
   * Component FName for each material interface
   */
  MeshFName: string;

  MeshComponent: objectReference<Unknown<'UMeshComponent'>>;
}
