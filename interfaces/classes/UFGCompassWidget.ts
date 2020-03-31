import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGActorRepresentationManager } from './AFGActorRepresentationManager';
import { UFGCompassObjectWidget } from './UFGCompassObjectWidget';

export interface UFGCompassWidget extends Unknown<'UUserWidget'> {
  mCompassPanel: Unknown<'UCanvasPanel'>;

  mContentPanel: Unknown<'UCanvasPanel'>;

  mCompassLine: Unknown<'UImage'>;

  mCompassObjects: UFGCompassObjectWidget[];

  mCenterableCompassObjects: UFGCompassObjectWidget[];

  mCenterableResourceCompassObjects: UFGCompassObjectWidget[];

  mActorRepresentationManager: AFGActorRepresentationManager;

  mCurrentCenteredResourceObjects: UFGCompassObjectWidget[];

  mCurrentCenteredObject: UFGCompassObjectWidget;

  mThresholdForCenteredObjects: float;

  mThresholdForCenteredResourceObjects: float;
}
