import { UAkAudioEvent } from '../native/assets';
import { UObject } from '../native/classes';
import { uint8 } from '../native/primitive';

export interface UFGAmbientSettings extends UObject {
  /**
   * Event to post when OnGetClose is triggered
   */
  mOnEnterOuterVolumeEvent: UAkAudioEvent;

  /**
   * Event to post when OnGetFar is triggered
   */
  mOnExitOuterVolumeEvent: UAkAudioEvent;

  /**
   * Event to post when OnEnter is triggered
   */
  mOnEnterInnerVolumeEvent: UAkAudioEvent;

  /**
   * Event to post when OnExit is triggered
   */
  mOnExitInnerVolumeEvent: UAkAudioEvent;

  /**
   * If checked, then we don't rotate the audio source to match the rotation of the listener when inside the volume
   */
  mIgnoreListenerRotation: uint8;
}
