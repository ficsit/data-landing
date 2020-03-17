import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGSoundSplineComponent } from './UFGSoundSplineComponent';

export interface AFGBuildableConveyorBelt {
  /**
   * Mesh to use for his conveyor.
   */
  mMesh: UStaticMesh;

  /**
   * Length of the mesh to use for this conveyor.
   */
  mMeshLength: float;

  /**
   * Meshes for items.
   */
  mItemMeshMap: Record<string, Unknown<'UInstancedStaticMeshComponent'>>;

  /**
   * Compact representation of mSplineComponent, used for replication and save game
   */
  mSplineData: Unknown<'FSplinePointData'>[];

  /**
   * The spline component for this conveyor. Note that this is only the spline.
   */
  mSplineComponent: Unknown<'USplineComponent'>;

  /**
   * The spline meshes for this train track.
   */
  mInstancedSplineComponent: Unknown<'UFGInstancedSplineMeshComponent'>;

  /**
   * Wwise multiple position playback for the conveyor spline.
   */
  mSoundSplineComponent: UFGSoundSplineComponent;

  /**
   * The ak event to post for the sound spline
   */
  mSplineAudioEvent: Unknown<'UAkAudioEvent'>;
}
