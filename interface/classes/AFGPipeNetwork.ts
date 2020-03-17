import { IFGFluidIntegrantInterface } from '../interfaces/IFGFluidIntegrantInterface';
import { int32 } from '../native/primitive';
import { ScriptInterface, classReference } from '../native/references';

import { UFGItemDescriptor } from './UFGItemDescriptor';

export interface AFGPipeNetwork {
  mPipeNetworkID: int32;

  /**
   * The type of liquid in this network.
   */
  mFluidDescriptor: classReference<UFGItemDescriptor>;

  mPendingFluidDescriptor: classReference<UFGItemDescriptor>;

  /**
   * Compiled during save, and Interface classes are extracted on load. Stores the mFluidIntegrants in a UPROPERTY type
   */
  mFluidIntegrantScriptInterfaces: ScriptInterface<IFGFluidIntegrantInterface>[];
}
