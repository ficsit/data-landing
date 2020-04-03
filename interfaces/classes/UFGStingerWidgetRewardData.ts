import { UTexture2D } from '../native/assets';
import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

export interface UFGStingerWidgetRewardData extends UObject {
  mIconText: localized;

  mIconTexture: UTexture2D;
}
