import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';

export interface AFGBuildableRailroadTrack {
  /**
   * Mesh to use for his track.
   */
  mMesh: UStaticMesh;

  /**
   * Length of the mesh to use for this track
   */
  mMeshLength: float;

  /**
   * The spline component for this train track.
   */
  mSplineComponent: Unknown<'USplineComponent'>;

  /**
   * The spline meshes for this train track.
   */
  mInstancedSplineComponent: Unknown<'UFGInstancedSplineMeshComponent'>;

  /**
   * Spline data saved in a compact form for saving and replicating. All the vectors are in local space.
   */
  mSplineData: Unknown<'FSplinePointData'>[];

  /**
   * This tracks connection component.
   */
  mConnections: UFGRailroadTrackConnectionComponent;

  /**
   * Was this track created and is owned by a platform.
   */
  mIsOwnedByPlatform: boolean;
}
