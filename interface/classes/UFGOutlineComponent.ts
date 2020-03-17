import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';
import { FCachedMaterialInterfaceArray } from '../structs/FCachedMaterialInterfaceArray';
import { FCachedMeshToMaterialObject } from '../structs/FCachedMeshToMaterialObject';
import { FCachedSplineMeshToMaterialObject } from '../structs/FCachedSplineMeshToMaterialObject';

import { UFGSplineComponent } from './UFGSplineComponent';

export interface UFGOutlineComponent {
  mOutlineProxy: Unknown<'UStaticMeshComponent'>;

  mActiveOutlineActor: AActor;

  mActiveMultiOutlineActors: AActor[];

  mCachedActorMaterials: Record<AActor, FCachedMeshToMaterialObject>;

  mCachedSplineComponentMaterials: Record<UFGSplineComponent, FCachedSplineMeshToMaterialObject>;

  mCachedProxyMeshMaterials: Record<
    Unknown<'UProxyInstancedStaticMeshComponent'>,
    FCachedMaterialInterfaceArray
  >;
}
