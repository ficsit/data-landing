import { IFGUseableInterface } from '../interfaces/IFGUseableInterface';
import { UStaticMesh } from '../native/assets';
import { AActor } from '../native/classes';

export interface AFGFoliagePickup extends AActor, IFGUseableInterface {
  /**
   * The mesh that should be outlining
   */
  mPickupMesh: UStaticMesh;
}
