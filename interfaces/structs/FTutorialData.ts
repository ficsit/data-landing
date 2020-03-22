import { UFGMessageBase } from '../classes/UFGMessageBase';
import { UObject } from '../native/classes';
import { classReference } from '../native/references';

export interface FTutorialData {
  ClassBuilt: classReference<UObject>;

  MessageID: classReference<UFGMessageBase>;
}
