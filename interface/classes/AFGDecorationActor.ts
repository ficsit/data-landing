import { classReference } from '../native/references';

import { UFGDecorationDescriptor } from './UFGDecorationDescriptor';

export interface AFGDecorationActor {
  /**
   * The descriptor of this decoration
   */
  mDecorationDescriptor: classReference<UFGDecorationDescriptor>;
}
