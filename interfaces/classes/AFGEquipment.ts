import { EArmEquipment } from '../enums/EArmEquipment';
import { EBackEquipment } from '../enums/EBackEquipment';
import { EEquipmentSlot } from '../enums/EEquipmentSlot';
import { IFGReplicationDependencyActorInterface } from '../interfaces/IFGReplicationDependencyActorInterface';
import { AActor } from '../native/classes';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FItemAmount } from '../structs/FItemAmount';

import { AFGEquipmentAttachment } from './AFGEquipmentAttachment';
import { AFGEquipmentChild } from './AFGEquipmentChild';

export interface AFGEquipment
  extends AActor,
    Unknown<'IFGSaveInterface'>,
    IFGReplicationDependencyActorInterface {
  /**
   * This is the attachment for this class
   */
  mAttachmentClass: classReference<AFGEquipmentAttachment>;

  /**
   * This is the secondary attachment for this class
   */
  mSecondaryAttachmentClass: classReference<AFGEquipmentAttachment>;

  /**
   * To what slot is this limited to?
   */
  mEquipmentSlot: EEquipmentSlot;

  /**
   * Camera shake to play when sprinting
   */
  mSprintHeadBobShake: classReference<Unknown<'UCameraShake'>>;

  /**
   * Sound played when equipping
   */
  mEquipSound: Unknown<'UAkAudioEvent'>;

  /**
   * Sound played when unequipping
   */
  mUnequipSound: Unknown<'UAkAudioEvent'>;

  /**
   * Class of widget to add when equipping this equipment
   */
  mEquipmentWidget: classReference<Unknown<'UUserWidget'>>;

  /**
   * Holds a reference to the child equipment that may be spawned with this
   */
  mChildEquipment: AFGEquipmentChild;

  /**
   * The AnimBlueprint class to use for the 1p anim for our pawn, specifying none here means that the pawn default 1p anim will be used
   */
  m1PAnimClass: classReference<Unknown<'UAnimInstance'>>;

  /**
   * If this equipment should attach to a socket, this is the socket.
   */
  mAttachSocket: string;

  /**
   * The class (if any) to use to spawn a child equipment
   */
  mChildEquipmentClass: classReference<AFGEquipmentChild>;

  /**
   * The cost of using this equipment
   */
  mCostToUse: FItemAmount[];

  /**
   * Arms animation this should play on the when the equipment is equipped (only used if mEquipmentSlot == ES_ARMS)
   */
  mArmAnimation: EArmEquipment;

  /**
   * Arms animation this should play on the when the equipment is equipped (only used if mEquipmentSlot == ES_BACK)
   */
  mBackAnimation: EBackEquipment;

  /**
   * If the owner is persistent throughout the lifetime of this equipment
   */
  mHasPersistentOwner: boolean;

  /**
   * This is the attachment of this equipment
   */
  mAttachment: AFGEquipmentAttachment;

  /**
   * This is a potential secondary attachment
   */
  mSecondaryAttachment: AFGEquipmentAttachment;

  /**
   * Idle animation to play when equipped. Can be null if we don't want to play any special animation
   */
  mIdlePoseAnimation: Unknown<'UAnimSequence'>;

  /**
   * Idle animation to play when equipped in 3p. Can be null if we don't want to play any special animation
   */
  mIdlePoseAnimation3p: Unknown<'UAnimSequence'>;

  /**
   * Should we use the default primary fire implementation
   */
  mUseDefaultPrimaryFire: boolean;
}
