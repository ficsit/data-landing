import { UStaticMesh } from '../native/assets';
import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';

import { UFGEquipmentDescriptor } from './UFGEquipmentDescriptor';

export interface UFGDecorationDescriptor extends UFGEquipmentDescriptor {
  /**
   * The static mesh we want for representing the decoration when placed on ground.
   */
  mGroundMesh: UStaticMesh;

  /**
   * Scale that can be used for the ground mesh
   */
  mGroundMeshScale: Vector;

  /**
   * The static mesh we want for representing the decoration when equipped in 1p.
   */
  mMesh1p: UStaticMesh;

  /**
   * The static mesh we want for representing the decoration when equipped in 3p.
   */
  mMesh3p: UStaticMesh;

  /**
   * The actor to spawn on primary fire press if we want one, can be null
   */
  mDecorationActorClass: classReference<AActor>;
}
