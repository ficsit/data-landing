import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGInteractActor } from './AFGInteractActor';
import { UFGDecorationDescriptor } from './UFGDecorationDescriptor';

export interface AFGDecorationActor extends AFGInteractActor, Unknown<'IFGSaveInterface'> {
  /**
   * The descriptor of this decoration
   */
  mDecorationDescriptor: classReference<UFGDecorationDescriptor>;
}
