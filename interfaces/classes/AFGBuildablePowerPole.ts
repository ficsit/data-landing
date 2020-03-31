import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGBuildable } from './AFGBuildable';
import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';
import { UFGPowerConnectionComponent } from './UFGPowerConnectionComponent';

export interface AFGBuildablePowerPole extends AFGBuildable {
  mConnectionsWidgetComponent: Unknown<'UWidgetComponent'>;

  mConnectionWidgetClass: classReference<Unknown<'UUserWidget'>>;

  /**
   * The connection on this pole.
   */
  mPowerConnection: UFGPowerConnectionComponent;

  /**
   * The mesh component for this pole.
   */
  mMeshComponentProxy: UFGColoredInstanceMeshProxy;

  mCachedNumConnectionsToPole: int32;
}
