import { Unknown } from '../native/unknown';
import { FSignWallData } from '../structs/FSignWallData';

import { AFGBuildableWall } from './AFGBuildableWall';

export interface AFGBuildableSignWall extends AFGBuildableWall {
  /**
   * Root Component that holds all the sign elements, text, mesh etc.
   */
  mSignDisplayRoot: Unknown<'USceneComponent'>;

  /**
   * Root component that parents the text objects
   */
  mTextDisplayRoot: Unknown<'USceneComponent'>;

  /**
   * Front text render component
   */
  mTextRenderComponent: Unknown<'UTextRenderComponent'>;

  mSignData: FSignWallData;
}
