import { int32 } from '../native/primitive';

/**
 * Base struct for items using Custom Fast TArray Replication
 */
export interface FCustomFastArraySerializerItem {
  ReplicationID: int32;

  ReplicationKey: int32;

  MostRecentArrayReplicationKey: int32;
}
