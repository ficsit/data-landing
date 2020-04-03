import { uint8 } from '../native/primitive';

/**
 * structure that holds variables per input whether it's allowed or not. NOTE: True if input is disabled.
 */
export interface FDisabledInputGate {
  mBuildGun: uint8;

  mDismantle: uint8;

  mFlashLight: uint8;

  mResourceScanner: uint8;

  mOpenCodex: uint8;

  mInventory: uint8;

  mToggleMap: uint8;

  mHotbar: uint8;

  mJump: uint8;

  mChat: uint8;

  mUse: uint8;

  mVehicleRecording: uint8;
}
