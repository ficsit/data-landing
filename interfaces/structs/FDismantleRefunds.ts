import { uint32 } from '../native/primitive';

import { FInventoryStack } from './FInventoryStack';

export interface FDismantleRefunds {
  NumPendingActors: uint32;

  PeekDismantleRefund: FInventoryStack[];
}
