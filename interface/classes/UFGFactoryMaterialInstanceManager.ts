import { Unknown } from '../native/unknown';

export interface UFGFactoryMaterialInstanceManager {
  /**
   * All materials are the same but their params are set to match the colors specified by the color gun
   */
  mMaterialInstances: Unknown<'UMaterialInstanceDynamic'>[];

  mInstanceNames: string[];
}
