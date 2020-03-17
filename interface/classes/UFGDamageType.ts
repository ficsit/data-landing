import { EOverrideSetting } from '../enums/EOverrideSetting';
import { EPlayOnDamageEvent } from '../enums/EPlayOnDamageEvent';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGDamageType extends Unknown<'UDamageType'> {
  /**
   * When pawn take damage from a source, they play this take damage event
   */
  mImpactAudioEvent: Unknown<'UAkAudioEvent'>;

  mPlayImpactAudioOn: EPlayOnDamageEvent;

  /**
   * Specify if the audio from this damage type should overrride the damage sound in hit pawn, or add to it
   */
  mImpactAudioSetting: EOverrideSetting;

  /**
   * When pawn take damage from a source, they play this take damage event
   */
  mImpactParticle: Unknown<'UParticleSystem'>;

  mPlayImpactParticleOn: EPlayOnDamageEvent;

  /**
   * Specify if the audio from this damage type should overrride the damage effect in hit pawn, or add to it
   */
  mImpactParticleSetting: EOverrideSetting;

  /**
   * Should this damage type hurt destrucrible actors?
   */
  mShouldDamageDestructible: boolean;

  /**
   * How much extra impulse should be added in Z direction for this damage type
   */
  mDamageImpulseZ: float;

  /**
   * Should this damage type shock and scare the enemy, like the stun spear?
   */
  mShouldShockEnemy: boolean;
}
