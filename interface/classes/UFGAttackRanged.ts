import { classReference } from '../native/references';

import { AFGProjectile } from './AFGProjectile';
import { UFGAttack } from './UFGAttack';

export interface UFGAttackRanged extends UFGAttack {
  mProjectileClass: classReference<AFGProjectile>;
}
