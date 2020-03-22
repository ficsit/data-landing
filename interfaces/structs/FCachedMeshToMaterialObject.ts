import { Unknown } from '../native/unknown';

import { FCachedMaterialInterfaceArray } from './FCachedMaterialInterfaceArray';

export interface FCachedMeshToMaterialObject {
  CachedMaterialInterfaces: Record<Unknown<'UMeshComponent'>, FCachedMaterialInterfaceArray>;
}
