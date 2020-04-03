import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGDotComponent } from './UFGDotComponent';
import { UFGSharedPostProcessSettings } from './UFGSharedPostProcessSettings';

export interface AFGGasPillar
  extends AActor,
    IFGSignificanceInterface,
    Unknown<'IInterface_PostProcessVolume'> {
  /**
   * Mesh for the gas pillar
   */
  mMesh: Unknown<'UStaticMeshComponent'>;

  /**
   * Collision for when to activate dot component
   */
  mOverlapCollision: Unknown<'USphereComponent'>;

  /**
   * The component that will do the damage to actors
   */
  mDotComponent: UFGDotComponent;

  /**
   * Some damage over time volumes will want a post process effect attached to it
   */
  mPostProcessSettings: classReference<UFGSharedPostProcessSettings>;

  mSignificanceRange: float;
}
