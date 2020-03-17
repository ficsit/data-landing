import { UObject } from '../native/classes';
import { Unknown } from '../native/unknown';

export interface UFGFactoryMaterialInstanceManager extends UObject {
  /**
   * All materials are the same but their params are set to match the colors specified by the color gun
   */
  mMaterialInstances: Unknown<'UMaterialInstanceDynamic'>[];

  mInstanceNames: string[];
}
