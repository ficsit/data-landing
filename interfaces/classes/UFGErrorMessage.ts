import { EErrorResponse } from '../enums/EErrorResponse';
import { UObject } from '../native/classes';
import { localized } from '../native/primitive';

/**
 * @todo: Move UFGErrorMesssage to another file
 */
export interface UFGErrorMessage extends UObject {
  /**
   * Localized error message that we can push
   */
  mErrorMessage: localized;

  /**
   * Shows how this error should be handled
   */
  mErrorResponse: EErrorResponse;
}
