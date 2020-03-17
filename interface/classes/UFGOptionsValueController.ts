import { Unknown } from '../native/unknown';
import { FOptionRowData } from '../structs/FOptionRowData';

export interface UFGOptionsValueController extends Unknown<'UUserWidget'> {
  mOptionRowData: FOptionRowData;

  mIsDynamicOption: boolean;
}
