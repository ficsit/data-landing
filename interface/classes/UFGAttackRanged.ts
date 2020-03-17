import { classReference } from '../native/references';

import { AFGProjectile } from './AFGProjectile';

export interface UFGAttackRanged {
  mProjectileClass: classReference<AFGProjectile>;
}
