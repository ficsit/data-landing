import { Unknown } from '../native/unknown';

import { AFGTrain } from './AFGTrain';
import { UFGLocomotiveMovementComponent } from './UFGLocomotiveMovementComponent';
import { UFGRailroadVehicleMovementComponent } from './UFGRailroadVehicleMovementComponent';

export interface UFGRailroadVehicleSoundComponent extends Unknown<'USceneComponent'> {
  /**
   * Movement component of the first vehicle in the train.
   */
  mVehicleMovementComponent: UFGRailroadVehicleMovementComponent;

  /**
   * Movement component of the first locomotive in the train, may be none.
   */
  mLocomotiveMovementComponent: UFGLocomotiveMovementComponent;

  /**
   * train that owns this component
   */
  mTrainOwner: AFGTrain;

  /**
   * Component to play events on the wheelsets. Location is the bogie bone.
   */
  mWheelsetsAkComponent: Unknown<'UAkComponent'>;

  /**
   * Component to play events on the locomotives. Location is the center of the actor bounds (colliding).
   */
  mEnginesAkComponent: Unknown<'UAkComponent'>;

  /**
   * Component to play events on all the locomotives and wagons. Location is the center of the actor bounds (colliding).
   */
  mAllVehicleCentersAkComponent: Unknown<'UAkComponent'>;
}
