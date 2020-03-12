import { integer } from './primitives';
import { PackageReference } from './references';

export interface ItemAmount {
  ClassName: PackageReference;
  Amount: integer;
}
