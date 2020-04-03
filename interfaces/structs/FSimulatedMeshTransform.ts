import { UStaticMesh } from '../native/assets';
import { Unknown } from '../native/unknown';

export interface FSimulatedMeshTransform {
  StaticMesh: UStaticMesh;

  MeshTransform: Unknown<'FTransform'>;
}
