import { UTexture2D } from '../native/assets';
import { localized } from '../native/primitive';
import { Vector } from '../native/structs';
import { Unknown } from '../native/unknown';

import { UFGActorRepresentation } from './UFGActorRepresentation';

export interface UFGCompassObjectWidget {
  mTexture: UTexture2D;

  mText: localized;

  mPositionOffset: Unknown<'FVector2D'>;

  mClampPosition: boolean;

  mShouldFadeInEdges: boolean;

  mImage: Unknown<'UImage'>;

  mCheckForBlockingInCompass: boolean;

  mActorRepresentation: UFGActorRepresentation;

  mStaticDirection: Vector;

  mIsBlocking: boolean;
}
