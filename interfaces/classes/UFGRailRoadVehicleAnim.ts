import { UAkAudioEvent, UParticleSystem } from '../native/assets';
import { Unknown } from '../native/unknown';
import { FAnimInstanceProxyRailRoadVehicle } from '../structs/FAnimInstanceProxyRailRoadVehicle';

export interface UFGRailRoadVehicleAnim extends Unknown<'UAnimInstance'> {
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
  mBrakeSparkTemplate: UParticleSystem;

  /**
   * Template for steam particle
   */
  mSteamTemplate: UParticleSystem;

  /**
   * Sound for when braking stops and steam occurs
   */
  mBrakeSound: UAkAudioEvent;

  /**
   * Template for brake effect
   */
  mHandBrakeVfxTemplate: UParticleSystem;

  /**
   * Template for brake effect
   */
  mHandBrakeVfxComponent: Unknown<'UParticleSystemComponent'>;
}
