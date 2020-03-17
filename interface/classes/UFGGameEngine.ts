import { IFGWorldCreationInterface } from '../interfaces/IFGWorldCreationInterface';
import { Unknown } from '../native/unknown';
import { FFGEngineCommon } from '../structs/FFGEngineCommon';

export interface UFGGameEngine extends Unknown<'UGameEngine'>, IFGWorldCreationInterface {
  /**
   * Shared implementation for world creation
   */
  mEngineCommonImp: FFGEngineCommon;
}
