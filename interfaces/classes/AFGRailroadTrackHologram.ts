import { UStaticMesh } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGSplineHologram } from './AFGSplineHologram';
import { UFGRailroadTrackConnectionComponent } from './UFGRailroadTrackConnectionComponent';

export interface AFGRailroadTrackHologram extends AFGSplineHologram {
  /**
   * Length restriction of the track. [cm]
   */
  mMinLength: float;

  /**
   * Length restriction of the track. [cm]
   */
  mMaxLength: float;

  /**
   * Turn radius restriction of the track. [cm]
   */
  mMinBendRadius: float;

  /**
   * Grade restriction of the track. [degrees]
   */
  mMaxGrade: float;

  /**
   * From how far away we should snap to another track. [cm]
   */
  mSnapDistance: float;

  /**
   * The track connections we have.
   */
  mConnectionComponents: UFGRailroadTrackConnectionComponent;

  /**
   * The track connection we snap when building the track.
   */
  mSnappedConnectionComponents: UFGRailroadTrackConnectionComponent;

  /**
   * All the generated spline meshes.
   */
  mSplineMeshes: Unknown<'USplineMeshComponent'>[];

  /**
   * Cached from the default buildable.
   */
  mMesh: UStaticMesh;
}
