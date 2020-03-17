import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FResourceSinkRewardLevelsData extends Unknown<'FTableRowBase'> {
  RequiredPoints: Unknown<'int64'>;

  NumRepeats: int32;
}
