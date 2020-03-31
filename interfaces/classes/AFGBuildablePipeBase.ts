import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGBuildable } from './AFGBuildable';

export interface AFGBuildablePipeBase extends AFGBuildable, IFGSignificanceInterface {
  /**
   * Mesh to use for his conveyor.
   */
  mMesh: UStaticMesh;

  /**
   * Length of the mesh to use for this conveyor.
   */
  mMeshLength: float;

  mConnection0: Unknown<'UFGPipeConnectionComponentBase'>;

  mConnection1: Unknown<'UFGPipeConnectionComponentBase'>;

  /**
   * Compact representation of mSplineComponent, used for replication and save game
   */
  mSplineData: Unknown<'FSplinePointData'>[];

  /**
   * The spline component for this splined factory.
   */
  mSplineComponent: Unknown<'USplineComponent'>;

  /**
   * The spline meshes for this train track.
   */
  mInstancedSplineComponent: Unknown<'UFGInstancedSplineMeshComponent'>;
}
