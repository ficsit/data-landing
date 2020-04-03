import { UFGRecipe } from '../classes/UFGRecipe';
import { AActor } from '../native/classes';
import { uint8 } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { FNetConstructionID } from './FNetConstructionID';

export interface FConstructHologramMessage {
  ConstructionID: FNetConstructionID;

  Recipe: classReference<UFGRecipe>;

  UpgradeActor: AActor;

  SerializedHologramData: uint8[];

  NumBits: Unknown<'int64'>;
}
