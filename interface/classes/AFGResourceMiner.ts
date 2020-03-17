import { Unknown } from '../native/unknown';

import { AFGEquipment } from './AFGEquipment';
import { AFGResourceNode } from './AFGResourceNode';

export interface AFGResourceMiner extends AFGEquipment {
  /**
   * The effect the spawn when picking.
   */
  mPickParticleSystem: Unknown<'UParticleSystem'>;

  /**
   * Animation to play when picking.
   */
  mPickArmsAnim: Unknown<'UAnimationAsset'>;

  /**
   * The node we want to pick from
   */
  mCachedResouceNode: AFGResourceNode;
}
