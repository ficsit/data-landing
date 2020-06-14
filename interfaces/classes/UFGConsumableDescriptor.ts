import { UAkAudioEvent, USkeletalMesh, UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Rotator, Vector } from '../native/structs';

import { UFGEquipmentDescriptor } from './UFGEquipmentDescriptor';

export interface UFGConsumableDescriptor extends UFGEquipmentDescriptor {
  /**
   * Sound played when consuming
   */
  mConsumeEvent: UAkAudioEvent;

  /**
   * Custom scale of mesh in hands
   */
  mCustomHandsMeshScale: float;

  /**
   * Custom local rotaion of mesh in hands
   */
  mCustomRotation: Rotator;

  /**
   * Custom local location of mesh in hands
   */
  mCustomLocation: Vector;

  /**
   * The skeletal  mesh we want for representing the resource when it is in first person.
   */
  mFPOverrideMesh: USkeletalMesh;

  /**
   * The static mesh we want for representing the resource when it is in third person.
   */
  mTPOverrideMesh: UStaticMesh;
}
