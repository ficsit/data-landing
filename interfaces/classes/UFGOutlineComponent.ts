import { AActor } from '../native/classes';
import { Unknown } from '../native/unknown';
import { FCachedMaterialInterfaceArray } from '../structs/FCachedMaterialInterfaceArray';
import { FCachedMeshToMaterialObject } from '../structs/FCachedMeshToMaterialObject';
import { FCachedSplineMeshToMaterialObject } from '../structs/FCachedSplineMeshToMaterialObject';

import { UFGSplineComponent } from './UFGSplineComponent';

export interface UFGOutlineComponent extends Unknown<'USceneComponent'> {
  mOutlineProxy: Unknown<'UStaticMeshComponent'>;

  mActiveOutlineActor: AActor;

  mActiveMultiOutlineActors: AActor[];

  mCachedActorMaterials: Map<AActor, FCachedMeshToMaterialObject>;

  mCachedSplineComponentMaterials: Map<UFGSplineComponent, FCachedSplineMeshToMaterialObject>;

  mCachedProxyMeshMaterials: Map<
    Unknown<'UProxyInstancedStaticMeshComponent'>,
    FCachedMaterialInterfaceArray
  >;
}
