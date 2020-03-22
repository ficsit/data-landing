import { UObject } from '../native/classes';

export interface UFGMapAreaZoneDescriptor extends UObject {
  /**
   * Descriptive name of the zone type, this will be sent to music so that it can depend on it
   */
  mZoneType: string;
}
