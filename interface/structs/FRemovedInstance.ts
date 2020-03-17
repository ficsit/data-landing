import { Unknown } from '../native/unknown';

/**
 * We can't send the id of the instance to clients, as that requires us to maintain a commandbuffer with all done commands to be able to get the same id's a server/client
 */
export interface FRemovedInstance {
  /**
   * Stored in localspace. Compressed location to get the id of the item, @todo: Toy around with different FVector_NetQuantize and see what works best
   */
  Location: Unknown<'FVector_NetQuantize10'>;

  /**
   * Stored in localspace
   */
  Transform: Unknown<'FTransform'>;
}
