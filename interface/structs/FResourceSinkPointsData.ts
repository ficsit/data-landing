import { UFGItemDescriptor } from '../classes/UFGItemDescriptor';
import { int32 } from '../native/primitive';
import { classReference } from '../native/references';

export interface FResourceSinkPointsData {
  ItemClass: classReference<UFGItemDescriptor>;

  Points: int32;

  OverriddenResourceSinkPoints: int32;
}
