import { AActor } from '../native/classes';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface AFGSkySphere extends AActor, Unknown<'ICurvePanningInterface'> {
  /**
   * How the sunlight changes during the day
   */
  mSunLightColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How does the suns intensity change during the day
   */
  mSunIntensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Unlogical property, basically tells how the suns location in it's curve should change during the day
   */
  mSunRotationPitch: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Changes how the lightshafts changes during the day
   */
  mSunLightShaftOcclusionCurve: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How the moonlight changes during the NIGHT
   */
  mMoonLightColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How does the moons intensity change during the NIGHT
   */
  mMoonIntensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Unlogical property, basically tells how the moons location in it's curve should change during the day
   */
  mMoonRotationPitch: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Changes how the lightshafts changes during the day
   */
  mMoonLightShaftOcclusionCurve: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How does the sky light intensity change during the day
   */
  mSkyLightIntensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How does the occlusion tint intensity change during the day
   */
  mOcclusionTintColor: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the color of the horizon changes during the day
   */
  mHorizonColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the color of the zenith changes during the day
   */
  mZenithColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the color of clouds zenith changes during the day
   */
  mCloudColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the opakeness of the clouds change during the day
   */
  mCloudOpacity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How does the stars brightness change during the day
   */
  mStarBrightness: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How does the ambient light color change during the day
   */
  mSkyLightColor: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How does the sun multiplier change during the day in the atmospheric fog
   */
  mSunFogMultiplier: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How the sunlight changes during the day
   */
  mPreviewTime: float;
}
