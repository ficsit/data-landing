import { UStaticMesh } from '../native/assets';
import { Vector } from '../native/structs';

export interface FPickedUpInstance {
  InstanceMesh: UStaticMesh;

  Location: Vector;
}
