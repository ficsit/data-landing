import { Unknown } from '../native/unknown';

import { UFGActorRepresentation } from './UFGActorRepresentation';

export interface AFGActorRepresentationManager {
  /**
   * Called whenever a new representation is added
   */
  mOnActorRepresentationAdded: Unknown<'FOnActorRepresentationAdded'>;

  /**
   * Called whenever a new representation is removed, not sure how long it will be valid after a remove.
   */
  mOnActorRepresentationRemoved: Unknown<'FOnActorRepresentationRemoved'>;

  /**
   * Called whenever a representation is updated
   */
  mOnActorRepresentationUpdated: Unknown<'FOnActorRepresentationUpdated'>;

  /**
   * Called whenever a new representation changes it's show value for the compass
   */
  mOnActorRepresentationUpdatedCompassShow: Unknown<'FOnActorRepresentationUpdatedCompassShow'>;

  /**
   * Called whenever a new representation changes it's show value for the maps
   */
  mOnActorRepresentationUpdatedMapShow: Unknown<'FOnActorRepresentationUpdatedMapShow'>;

  /**
   * Called whenever a representation type changes it's filter status on the map
   */
  mOnActorRepresentationTypeFilteredOnMap: Unknown<'FOnActorRepresentationTypeFilteredOnMap'>;

  /**
   * Called whenever a representation type changes it's filter status on the compass
   */
  mOnActorRepresentationTypeFilteredOnCompass: Unknown<'FOnActorRepresentationTypeFilteredOnCompass'>;

  /**
   * These are all the representations of actors that should replicate from server to clients
   */
  mReplicatedRepresentations: UFGActorRepresentation[];

  /**
   * Simulated on client to keep track of added and removed representations
   */
  mClientReplicatedRepresentations: UFGActorRepresentation[];

  /**
   * These are representation that the local player adds for them selves, often temporary stuff that others shouldn't see
   */
  mLocalRepresentations: UFGActorRepresentation[];
}
