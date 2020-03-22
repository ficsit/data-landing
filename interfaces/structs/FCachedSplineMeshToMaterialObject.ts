import { Unknown } from '../native/unknown';

import { FCachedMaterialInterfaceArray } from './FCachedMaterialInterfaceArray';

export interface FCachedSplineMeshToMaterialObject {
  CachedMaterialInterfaces: Record<Unknown<'USplineMeshComponent'>, FCachedMaterialInterfaceArray>;

  InstancedMaterialInterfaces: Unknown<'UMaterialInterface'>[];
}
