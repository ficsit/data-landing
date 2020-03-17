import { IFGSaveInterface } from '../interfaces/IFGSaveInterface';
import { float, int32, uint8 } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface UFGPowerInfoComponent extends Unknown<'UActorComponent'>, IFGSaveInterface {
  mCircuitID: int32;

  /**
   * Power to draw from the circuit.
   */
  mTargetConsumption: float;

  /**
   * The actual power we got from the circuit (updated each frame).
   */
  mActualConsumption: float;

  /**
   * Power to always provide to the circuit.
   */
  mBaseProduction: float;

  /**
   * Power to optionally provide to the circuit.
   */
  mDynamicProductionCapacity: float;

  /**
   * The demand for dynamic power (updated each frame).
   */
  mDynamicProductionDemandFactor: float;

  /**
   * true if the circuit is overloaded and the fuse has been triggered.
   */
  mIsFuseTriggered: uint8;
}
