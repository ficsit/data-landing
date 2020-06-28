import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { UObject } from '../native/classes';
import { int32 } from '../native/primitive';

import { AFGTargetPoint } from './AFGTargetPoint';

export interface UFGTargetPointLinkedList extends UObject, IFGSaveInterface {
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
