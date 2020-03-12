import { integer } from './primitives';
import { ObjectReference } from './references';

export interface ItemAmount {
  ClassName: ObjectReference;
  Amount: integer;
}
