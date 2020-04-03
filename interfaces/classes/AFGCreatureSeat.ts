import { AFGCreature } from './AFGCreature';
import { AFGDriveablePawn } from './AFGDriveablePawn';

export interface AFGCreatureSeat extends AFGDriveablePawn {
  /**
   * The creature this seat is on
   */
  mMountedCreature: AFGCreature;
}
