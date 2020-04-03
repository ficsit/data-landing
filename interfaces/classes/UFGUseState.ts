import { UObject } from '../native/classes';

export interface UFGUseState extends UObject {
  /**
   * If true, we will allocate a instance of the state, so we can store information in the state
   */
  mWantAdditonalData: boolean;

  /**
   * If true, we will allocate a instance of the state, so we can store information in the state
   */
  mIsUsableState: boolean;
}
