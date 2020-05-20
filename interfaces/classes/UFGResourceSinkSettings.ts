import { float, int32 } from '../native/primitive';
import { classReference, objectReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGItemDescriptor } from './UFGItemDescriptor';
import { UFGMessageBase } from './UFGMessageBase';
import { UFGSchematic } from './UFGSchematic';

export interface UFGResourceSinkSettings extends Unknown<'UDeveloperSettings'> {
  mPointsDataTable: objectReference<Unknown<'UDataTable'>>;

  mRewardLevelsDataTable: objectReference<Unknown<'UDataTable'>>;

  mMaxPointsForItem: int32;

  mPointCalculationExpression: string;

  mCouponClass: classReference<UFGItemDescriptor>;

  mNumGlobalHistoryPoints: int32;

  mFailedSinkMessages: Map<classReference<UFGItemDescriptor>, classReference<UFGMessageBase>>;

  mGenericFailedSinkMessage: classReference<UFGMessageBase>;

  mCyberCouponSchematic: classReference<UFGSchematic>;

  mMultiplier: float;

  mExponent: float;

  mNumLevels: int32;

  mDefaultNumRepeats: int32;
}
