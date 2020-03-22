import { Unknown } from '../native/unknown';

export interface FCachedMaterialArray {
  MaterialInterfaces: Unknown<'UMaterialInterface'>[];

  /**
   * Component FName for each material interface
   */
  MeshFNames: string[];
}
