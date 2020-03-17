import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface FResourceSinkPointsData extends Unknown<'FTableRowBase'> {
  ItemClass: classReference<UFGItemDescriptor>;

  Points: int32;

  OverriddenResourceSinkPoints: int32;
}
