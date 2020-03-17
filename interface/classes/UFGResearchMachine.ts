import { UStaticMesh } from '../native/assets';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { AFGCharacterPlayer } from './AFGCharacterPlayer';
import { UFGResearchRecipe } from './UFGResearchRecipe';

export interface UFGResearchMachine {
  mCurrentResearchRecipe: classReference<UFGResearchRecipe>;

  mPlayerUsingMachine: AFGCharacterPlayer;

  mResearchingMeshComponent: Unknown<'UStaticMeshComponent'>;

  /**
   * This holds the actual mesh to be displayed by the assigned Static Mesh Component for mResearchingMeshComponent
   */
  mResearchingMesh: UStaticMesh;

  mItemScaleCurve: Unknown<'UCurveFloat'>;
}
