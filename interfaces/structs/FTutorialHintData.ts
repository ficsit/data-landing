import { UFGMessageBase } from '../classes/UFGMessageBase';
import { EIntroTutorialSteps } from '../enums/EIntroTutorialSteps';
import { localized } from '../native/primitive';
import { classReference } from '../native/references';

export interface FTutorialHintData {
  ID: EIntroTutorialSteps;

  Title: localized;

  HintTexts: localized[];

  Message: classReference<UFGMessageBase>;
}
