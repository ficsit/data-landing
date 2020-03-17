import { Unknown } from '../native/unknown';
import { FAnimInstanceProxyRailRoadVehicle } from '../structs/FAnimInstanceProxyRailRoadVehicle';

export interface UFGRailRoadVehicleAnim {
  mProxy: FAnimInstanceProxyRailRoadVehicle;

  /**
   * The UCurveFloat specifying brake force
   */
  mBrakeCurve: Unknown<'UCurveFloat'>;

  /**
   * Trains material
   */
  mTrainMaterial: Unknown<'UMaterialInstanceDynamic'>;

  /**
   * Collection of brake socket names
   */
  mBrakeSocketNames: string[];

  /**
   * Collection of brake effect particle components
   */
  mBrakeEffects: Unknown<'UParticleSystemComponent'>[];

  /**
   * Collection of steam socket names
   */
  mSteamSocketNames: string[];

  /**
   * Collection of brake effect particle components
   */
  mSteamEffects: Unknown<'UParticleSystemComponent'>[];

  /**
   * Template for brake sparks particle
   */
  mBrakeSparkTemplate: Unknown<'UParticleSystem'>;

  /**
   * Template for steam particle
   */
  mSteamTemplate: Unknown<'UParticleSystem'>;

  /**
   * Sound for when braking stops and steam occurs
   */
  mBrakeSound: Unknown<'UAkAudioEvent'>;

  /**
   * Template for brake effect
   */
  mHandBrakeVfxTemplate: Unknown<'UParticleSystem'>;

  /**
   * Template for brake effect
   */
  mHandBrakeVfxComponent: Unknown<'UParticleSystemComponent'>;
}
