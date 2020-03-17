import { Unknown } from '../native/unknown';

import { UFGSettings } from './UFGSettings';

export interface UFGEnvironmentSettings extends UFGSettings {
  /**
   * The collection containing the world bounds
   */
  mWorldBoundsParameters: Unknown<'UMaterialParameterCollection'>;
}
