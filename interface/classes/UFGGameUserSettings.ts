import { float, int32, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FAudioVolumeMap } from '../structs/FAudioVolumeMap';
import { FFGKeyMapping } from '../structs/FFGKeyMapping';

export interface UFGGameUserSettings {
  /**
   * Called when arachnophobia mode is changed
   */
  OnArachnophobiaModeChangedDelegate: Unknown<'FArachnophobiaModeChangedDelegate'>;

  /**
   * Audio volumes for the options
   */
  mAudioVolumes: FAudioVolumeMap[];

  /**
   * Sets Field of View
   */
  mFOV: int32;

  /**
   * Motion blur quality. 0 = off
   */
  mMotionBlurQuality: int32;

  /**
   * Is HZBO enabled
   */
  mHZBOEnabled: boolean;

  /**
   * List of remapped key Mappings
   */
  mCustomKeyMappings: FFGKeyMapping[];

  /**
   * The current network quality setting
   */
  mNetworkQuality: int32;

  /**
   * Scale of headbobbing
   */
  mHeadBobScale: float;

  /**
   * When true, arachnid-like creatures are replaced with cats.
   */
  mIsArachnophobiaMode: uint8;

  /**
   * Sets the Look-axis to inverted
   */
  mInvertY: uint8;

  /**
   * True means old-school hold down key to sprint, false = toggle sprint by pressing
   */
  mHoldToSprint: uint8;

  mAutoSortInventory: uint8;

  /**
   * Whether the user has opted out of analytics or not
   */
  mAnalyticsDisabled: uint8;

  /**
   * How often in seconds to autosave
   */
  mAutosaveInterval: int32;

  /**
   * Whether or not we should show the take break notification
   */
  mShowBreakNotification: boolean;

  /**
   * Delegate used for broadcasting updates to subscribed options
   */
  OptionUpdatedDelegate: Unknown<'FOptionUpdated'>;

  /**
   * The changed values that we want to save to file
   */
  mIntValues: Record<string, int32>;

  mFloatValues: Record<string, float>;
}
