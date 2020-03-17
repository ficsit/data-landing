import { ECompassViewDistance } from '../enums/ECompassViewDistance';
import { EFogOfWarRevealType } from '../enums/EFogOfWarRevealType';
import { ERepresentationType } from '../enums/ERepresentationType';
import { UTexture2D } from '../native/assets';
import { AActor } from '../native/classes';
import { float, localized } from '../native/primitive';
import { LinearColor } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface UFGActorRepresentation {
  /**
   * This is the real actor that this representation represents
   */
  mRealActor: AActor;

  /**
   * This is the actor location
   */
  mActorLocation: Unknown<'FVector_NetQuantize'>;

  /**
   * This is the actor rotation
   */
  mActorRotation: Unknown<'FRotator'>;

  /**
   * If the actor is static or can be moved
   */
  mIsStatic: boolean;

  /**
   * This is the texture to show for this actor representation
   */
  mRepresentationTexture: UTexture2D;

  /**
   * This is the text to show for this actor representation
   */
  mRepresentationText: localized;

  /**
   * This is the color used for the representation of this actor
   */
  mRepresentationColor: LinearColor;

  /**
   * This helps define how this actor representation should be presented
   */
  mRepresentationType: ERepresentationType;

  mFogOfWarRevealType: EFogOfWarRevealType;

  mFogOfWarRevealRadius: float;

  /**
   * If this should be shown in the compass or not
   */
  mShouldShowInCompass: boolean;

  /**
   * If this should be shown on the map or not
   */
  mShouldShowOnMap: boolean;

  /**
   * How far away this representation should be shown in the compass
   */
  mCompassViewDistance: ECompassViewDistance;
}
