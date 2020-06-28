import { float, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FExponentialFogSettings } from '../structs/FExponentialFogSettings';

export interface AFGAtmosphereVolume
  extends Unknown<'AVolume'>,
    Unknown<'ICurvePanningInterface'>,
    Unknown<'IInterface_PostProcessVolume'> {
  /**
   * @todoFog change to int since people use it like that anyway.
   */
  mPriority: float;

  /**
   * The distance that the fog blends over
   */
  mBlendDistance: float;

  /**
   * Interpolate the fog height during the day
   */
  mFogHeight: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mFogDensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mFogInscatteringColor: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * Interpolate the fog height during the day
   */
  mFullyDirectionalInscatteringColorDistance: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mNonDirectionalInscatteringColorDistance: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mDirectionalInscatteringExponent: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mDirectionalInscatteringStartDistance: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mDirectionalInscatteringColor: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * Interpolate the fog height during the day
   */
  mFogHeightFalloff: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mFogMaxOpacity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mStartDistance: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Interpolate the fog height during the day
   */
  mFogCutoffDistance: Unknown<'FRuntimeFloatCurve'>;

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
   * How the opaqueness of the clouds change during the day
   */
  mSunLightColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the opaqueness of the clouds change during the day
   */
  mMoonLightColorCurve: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * How the opaqueness of the clouds change during the day
   */
  mSunIntensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How the opaqueness of the clouds change during the day
   */
  mMoonIntensity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * How the opaqueness of the clouds change during the day
   */
  mCloudOpacity: Unknown<'FRuntimeFloatCurve'>;

  /**
   * The blend weight of the post process volume
   */
  mBlendWeight: float;

  mWhiteTemp: Unknown<'FRuntimeFloatCurve'>;

  mWhiteTint: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Color Correction controls
   */
  mColorSaturation: Unknown<'FRuntimeCurveLinearColor'>;

  mColorContrast: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGamma: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGain: Unknown<'FRuntimeCurveLinearColor'>;

  mColorOffset: Unknown<'FRuntimeCurveLinearColor'>;

  mColorSaturationShadows: Unknown<'FRuntimeCurveLinearColor'>;

  mColorContrastShadows: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGammaShadows: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGainShadows: Unknown<'FRuntimeCurveLinearColor'>;

  mColorOffsetShadows: Unknown<'FRuntimeCurveLinearColor'>;

  mColorSaturationMidtones: Unknown<'FRuntimeCurveLinearColor'>;

  mColorContrastMidtones: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGammaMidtones: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGainMidtones: Unknown<'FRuntimeCurveLinearColor'>;

  mColorOffsetMidtones: Unknown<'FRuntimeCurveLinearColor'>;

  mColorSaturationHighlights: Unknown<'FRuntimeCurveLinearColor'>;

  mColorContrastHighlights: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGammaHighlights: Unknown<'FRuntimeCurveLinearColor'>;

  mColorGainHighlights: Unknown<'FRuntimeCurveLinearColor'>;

  mColorOffsetHighlights: Unknown<'FRuntimeCurveLinearColor'>;

  mColorCorrectionHighlightsMin: Unknown<'FRuntimeFloatCurve'>;

  mColorCorrectionShadowsMax: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Correct for artifacts with "electric" blues due to the ACEScg color space. Bright blue desaturates instead of going to violet.
   */
  mBlueCorrection: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Expand bright saturated colors outside the sRGB gamut to fake wide gamut rendering.
   */
  mExpandGamut: Unknown<'FRuntimeFloatCurve'>;

  /**
   * Scene tint color
   */
  mSceneColorTint: Unknown<'FRuntimeCurveLinearColor'>;

  /**
   * Film Controls
   */
  mFilmSlope: Unknown<'FRuntimeFloatCurve'>;

  mFilmToe: Unknown<'FRuntimeFloatCurve'>;

  mFilmShoulder: Unknown<'FRuntimeFloatCurve'>;

  mFilmBlackClip: Unknown<'FRuntimeFloatCurve'>;

  mFilmWhiteClip: Unknown<'FRuntimeFloatCurve'>;

  /**
   * BEGIN DEPRECATED @todo Just found this, when do we clean up the code? -G2 2020-04-15
   */
  mContrast_DEPRECATED: Unknown<'FRuntimeCurveLinearColor'>;

  mGain_DEPRECATED: Unknown<'FRuntimeCurveLinearColor'>;

  mSaturation_DEPRECATED: Unknown<'FRuntimeCurveLinearColor'>;

  mEnableContrast_DEPRECATED: uint8;

  mEnableGain_DEPRECATED: uint8;

  mEnableSaturation_DEPRECATED: uint8;

  /**
   * Height fog bools
   */
  mEnableFogHeight: uint8;

  mEnableFogDensity: uint8;

  mEnableFogInscatteringColor: uint8;

  mEnableFullyDirectionalInscatteringColorDistance: uint8;

  mEnableNonDirectionalInscatteringColorDistance: uint8;

  mEnableDirectionalInscatteringExponent: uint8;

  mEnableDirectionalInscatteringStartDistance: uint8;

  mEnableDirectionalInscatteringColor: uint8;

  mEnableFogHeightFalloff: uint8;

  mEnableFogMaxOpacity: uint8;

  mEnableStartDistance: uint8;

  mEnableFogCutoffDistance: uint8;

  mOverrideHorizonColor: uint8;

  mOverrideMoonIntensity: uint8;

  /**
   * This is disabled for now, see FGAtmosphereUpdater.cpp
   */
  mOverrideCloudOpacity: uint8;

  mOverrideSunIntensity: uint8;

  mOverrideZenithColor: uint8;

  mOverrideCloudColor: uint8;

  mOverrideSunLightColor: uint8;

  mOverrideMoonLightColor: uint8;

  mEnableWhiteTemp: uint8;

  mEnableWhiteTint: uint8;

  mEnableColorSaturation: uint8;

  mEnableColorContrast: uint8;

  mEnableColorGamma: uint8;

  mEnableColorGain: uint8;

  mEnableColorOffset: uint8;

  mEnableFilmSlope: uint8;

  mEnableFilmToe: uint8;

  mEnableFilmShoulder: uint8;

  mEnableFilmBlackClip: uint8;

  mEnableFilmWhiteClip: uint8;

  mEnableColorSaturationShadows: uint8;

  mEnableColorContrastShadows: uint8;

  mEnableColorGammaShadows: uint8;

  mEnableColorGainShadows: uint8;

  mEnableColorOffsetShadows: uint8;

  mEnableColorSaturationMidtones: uint8;

  mEnableColorContrastMidtones: uint8;

  mEnableColorGammaMidtones: uint8;

  mEnableColorGainMidtones: uint8;

  mEnableColorOffsetMidtones: uint8;

  mEnableColorSaturationHighlights: uint8;

  mEnableColorContrastHighlights: uint8;

  mEnableColorGammaHighlights: uint8;

  mEnableColorGainHighlights: uint8;

  mEnableColorOffsetHighlights: uint8;

  mEnableColorCorrectionShadowsMax: uint8;

  mEnableColorCorrectionHighlightsMin: uint8;

  mEnableBlueCorrection: uint8;

  mEnableExpandGamut: uint8;

  mEnableSceneColorTint: uint8;

  /**
   * A stampdown in time, where we want to show of the preview settings
   */
  mPreviewTime: float;

  /**
   * A preview of all the settings in the current fog-volume
   */
  mPreviewSettings: FExponentialFogSettings;
}
