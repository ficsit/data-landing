import { EErrorResponse } from '../enums/EErrorResponse';
import { localized } from '../native/primitive';

/**
 * @todo: Move UFGErrorMesssage to another file
 */
export interface UFGErrorMessage {
  /**
   * Localized error message that we can push
   */
  mErrorMessage: localized;

  /**
   * Shows how this error should be handled
   */
  mErrorResponse: EErrorResponse;
}
