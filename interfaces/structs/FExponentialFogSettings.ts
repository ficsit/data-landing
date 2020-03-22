import { float } from '../native/primitive';
import { LinearColor } from '../native/structs';

export interface FExponentialFogSettings {
  /**
   * The ZValue of the fog
   */
  FogHeight: float;

  /**
   * Density of the fog
   */
  FogDensity: float;

  FogInscatteringColor: LinearColor;

  /**
   * Distance at which InscatteringColorCubemap should be used directly for the Inscattering Color.
   */
  FullyDirectionalInscatteringColorDistance: float;

  /**
   * Distance at which only the average color of InscatteringColorCubemap should be used as Inscattering Color.
   */
  NonDirectionalInscatteringColorDistance: float;

  DirectionalInscatteringExponent: float;

  DirectionalInscatteringStartDistance: float;

  DirectionalInscatteringColor: LinearColor;

  FogHeightFalloff: float;

  FogMaxOpacity: float;

  /**
   * Distance from the camera that the fog will start, in world units.
   */
  StartDistance: float;

  /**
   * Scene elements past this distance will not have fog applied.  This is useful for excluding skyboxes which already have fog baked in.
   */
  FogCutoffDistance: float;
}
