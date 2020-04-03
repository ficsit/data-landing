import { UObject } from '../native/classes';
import { int32 } from '../native/primitive';
import { Unknown } from '../native/unknown';

import { AFGTargetPoint } from './AFGTargetPoint';

export interface UFGTargetPointLinkedList extends UObject, Unknown<'IFGSaveInterface'> {
  /**
   * First node in linked list
   */
  mFirst: AFGTargetPoint;

  /**
   * Last node in linked list
   */
  mLast: AFGTargetPoint;

  /**
   * Current node
   */
  mCurrentTarget: AFGTargetPoint;

  /**
   * Max length that the linked list can be
   */
  mMaxLength: int32;
}
