import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { UFGEquipmentDescriptor } from './UFGEquipmentDescriptor';

export interface UFGConsumableDescriptor extends UFGEquipmentDescriptor {
  /**
   * Sound played when consuming
   */
  mConsumeEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Custom scale of mesh in hands
   */
  mCustomHandsMeshScale: float;

  /**
   * Custom local rotaion of mesh in hands
   */
  mCustomRotation: Unknown<'FRotator'>;

  /**
   * Custom local location of mesh in hands
   */
  mCustomLocation: Vector;

  /**
   * The skeletal  mesh we want for representing the resource when it is in first person.
   */
  mFPOverrideMesh: Unknown<'USkeletalMesh'>;

  /**
   * The static mesh we want for representing the resource when it is in third person.
   */
  mTPOverrideMesh: UStaticMesh;
}
