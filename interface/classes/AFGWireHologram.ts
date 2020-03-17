import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { AFGBuildableHologram } from './AFGBuildableHologram';
import { AFGPowerPoleHologram } from './AFGPowerPoleHologram';
import { UFGCircuitConnectionComponent } from './UFGCircuitConnectionComponent';
import { UFGRecipe } from './UFGRecipe';

export interface AFGWireHologram extends AFGBuildableHologram {
  /**
   * The two connection components we connect.
   */
  mConnections: UFGCircuitConnectionComponent;

  mPowerPole: AFGPowerPoleHologram;

  mDefaultPowerPoleRecipe: classReference<UFGRecipe>;

  /**
   * The start location of this wire
   */
  mStartLocation: Vector;

  /**
   * Keeps track of what connection we are working with
   */
  mCurrentConnection: int32;

  /**
   * The mesh we should stretch
   */
  mWireMesh: Unknown<'UStaticMeshComponent'>;
}
