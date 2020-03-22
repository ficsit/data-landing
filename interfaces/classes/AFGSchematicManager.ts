import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FSchematicCost } from '../structs/FSchematicCost';

import { AFGSubsystem } from './AFGSubsystem';
import { UFGMessageBase } from './UFGMessageBase';
import { UFGSchematic } from './UFGSchematic';

export interface AFGSchematicManager extends AFGSubsystem, IFGSaveInterface {
  /**
   * Called when we players are granted a schematic.
   */
  PurchasedSchematicDelegate: Unknown<'FPurchasedSchematicDelegate'>;

  /**
   * Called when a payment on a schematic occurs
   */
  PaidOffOnSchematicDelegate: Unknown<'FPaidOffOnSchematicDelegate'>;

  /**
   * All schematic assets that have been sucked up in the PopulateSchematicsList function. Contains cheats and all sort of schematic.
   */
  mAllSchematics: classReference<UFGSchematic>[];

  /**
   * All schematics that are available to the player
   */
  mAvailableSchematics: classReference<UFGSchematic>[];

  /**
   * Once schematic is purchased it ends up here
   */
  mPurchasedSchematics: classReference<UFGSchematic>[];

  /**
   * This keeps track of what players have paid off on different schematics
   */
  mPaidOffSchematic: FSchematicCost[];

  /**
   * The active schematic the resources is being sold towards.
   */
  mActiveSchematic: classReference<UFGSchematic>;

  /**
   * Called when we the schematic has been changed .
   */
  mOnActiveSchematicChanged: Unknown<'FOnActiveSchematicChanged'>;

  /**
   * Time stamp for when the ship is gonna land back at the Trading Post.
   */
  mShipLandTimeStamp: float;

  /**
   * Used to save the ship land timestamp
   */
  mShipLandTimeStampSave: float;

  mHasTechTierLimit: boolean;

  mMaxAllowedTechTier: int32;

  /**
   * Message sent when trading post ship has returned
   */
  mShipReturnedMessage: classReference<UFGMessageBase>;
}
