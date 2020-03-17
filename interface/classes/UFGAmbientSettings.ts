import { uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGAmbientSettings {
  /**
   * Event to post when OnGetClose is triggered
   */
  mOnEnterOuterVolumeEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Event to post when OnGetFar is triggered
   */
  mOnExitOuterVolumeEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Event to post when OnEnter is triggered
   */
  mOnEnterInnerVolumeEvent: Unknown<'UAkAudioEvent'>;

  /**
   * Event to post when OnExit is triggered
   */
  mOnExitInnerVolumeEvent: Unknown<'UAkAudioEvent'>;

  /**
   * If checked, then we don't rotate the audio source to match the rotation of the listener when inside the volume
   */
  mIgnoreListenerRotation: uint8;
}
