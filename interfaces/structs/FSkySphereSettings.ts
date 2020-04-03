import { float } from '../native/primitive';
import { LinearColor } from '../native/structs';

export interface FSkySphereSettings {
  /**
   * Color of the horizon after blending the skysphere curve with all volumes curves
   */
  HorizonColor: LinearColor;

  /**
   * Color of the zenith after blending the skysphere curve with all volumes curves
   */
  ZenithColor: LinearColor;

  /**
   * Color of the clouds after blending the skysphere curve with all volumes curves
   */
  CloudColor: LinearColor;

  /**
   * Color of the clouds after blending the skysphere curve with all volumes curves
   */
  SunLightColor: LinearColor;

  /**
   * Color of the clouds after blending the skysphere curve with all volumes curves
   */
  SunIntensity: float;

  /**
   * Color of the clouds after blending the skysphere curve with all volumes curves
   */
  MoonLightColor: LinearColor;

  /**
   * Color of the clouds after blending the skysphere curve with all volumes curves
   */
  MoonIntensity: float;

  /**
   * opacity of the clouds after blending the skysphere curve with all volumes curves
   */
  CloudOpacity: float;
}
