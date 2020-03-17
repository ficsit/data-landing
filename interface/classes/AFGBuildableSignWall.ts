import { Unknown } from '../native/unknown';
import { FSignWallData } from '../structs/FSignWallData';

export interface AFGBuildableSignWall {
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
