import { int32 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';
import { FResourceDepositPackage } from '../structs/FResourceDepositPackage';

import { AFGResourceNode } from './AFGResourceNode';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGResourceDeposit extends AFGResourceNode {
  /**
   * Valid if mLootTableIndex is not INDEX_NONE
   */
  mResourceDepositPackage: FResourceDepositPackage;

  /**
   * Index in the resource deposit table
   */
  mResourceDepositTableIndex: int32;

  /**
   * is deposit emptied
   */
  mIsEmptied: boolean;

  /**
   * How much to mine per cycle
   */
  mMineAmount: int32;

  /**
   * The mesh we use for displaying the resource deposit
   */
  mDepositMeshComponent: Unknown<'UStaticMeshComponent'>;

  mOverrideResourceClass: classReference<UFGResourceDescriptor>;
}
