import { Unknown } from '../native/unknown';

export interface FFGGameNetworkErrorMsg {
  errorType: Unknown<'ENetworkFailure::Type'>;

  errorMsg: string;
}
