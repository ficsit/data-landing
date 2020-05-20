import { Unknown } from '../native/unknown';

import { FCachedMaterialInterfaceArray } from './FCachedMaterialInterfaceArray';

export interface FCachedSplineMeshToMaterialObject {
  CachedMaterialInterfaces: Map<Unknown<'USplineMeshComponent'>, FCachedMaterialInterfaceArray>;

  InstancedMaterialInterfaces: Unknown<'UMaterialInterface'>[];
}
