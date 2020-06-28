import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { UAkAudioEvent } from '../native/assets';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FExponentialFogSettings } from '../structs/FExponentialFogSettings';

import { AFGAmbientVolume } from './AFGAmbientVolume';
import { AFGAtmosphereVolume } from './AFGAtmosphereVolume';
import { AFGAudioVolumeSubsystem } from './AFGAudioVolumeSubsystem';
import { AFGBuildableSubsystem } from './AFGBuildableSubsystem';
import { AFGFoliageRemovalSubsystem } from './AFGFoliageRemovalSubsystem';
import { AFGFoundationSubsystem } from './AFGFoundationSubsystem';
import { AFGMinimapCaptureActor } from './AFGMinimapCaptureActor';
import { AFGSkySphere } from './AFGSkySphere';
import { AFGWaterVolume } from './AFGWaterVolume';

export interface AFGWorldSettings extends Unknown<'AWorldSettings'>, IFGSaveInterface {
  /**
   * All the fog volumes currently streamed in, sorted in ascending order of priority.
   */
  mFogVolumes: AFGAtmosphereVolume[];

  /**
   * All the ambient volumes currently streamed in
   */
  mAmbientVolumes: AFGAmbientVolume[];

  /**
   * All the water volumes currently streamed in
   */
  mWaterVolumes: AFGWaterVolume[];

  /**
   * The default settings of the exponential height fog to apply
   */
  mDefaultHeightFogSettings: FExponentialFogSettings;

  /**
   * Set the height fog that's placed in the world here
   */
  mExponentialHeightFog: Unknown<'AExponentialHeightFog'>;

  /**
   * Set the sky sphere that's placed in the world here
   */
  mSkySphere: AFGSkySphere;

  /**
   * The minimap capture actor of this level, might be null
   */
  mMinimapCaptureActor: AFGMinimapCaptureActor;

  /**
   * Different events for different levels, so they can start different playlists
   */
  mLevelStartedEvent: UAkAudioEvent;

  /**
   * Save game that we should load by default when entering the map
   */
  mDefaultLoadSave: string;

  /**
   * Time of day to start the day (in hours)
   */
  mStartTimeOfDay: float;

  mBuildableSubsystem: AFGBuildableSubsystem;

  mFoundationSubsystem: AFGFoundationSubsystem;

  mAudioVolumeSubsystem: AFGAudioVolumeSubsystem;

  mFoliageRemovalSubsystem: AFGFoliageRemovalSubsystem;

  /**
   * Set the hour you want to preview here, 16.25 means 16h 15min
   */
  mPreviewHour: float;
}
