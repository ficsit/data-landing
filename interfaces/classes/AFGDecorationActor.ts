import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { classReference } from '../native/references';

import { AFGInteractActor } from './AFGInteractActor';
import { UFGDecorationDescriptor } from './UFGDecorationDescriptor';

export interface AFGDecorationActor extends AFGInteractActor, IFGSaveInterface {
  /**
   * The descriptor of this decoration
   */
  mDecorationDescriptor: classReference<UFGDecorationDescriptor>;
}
