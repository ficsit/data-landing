import { IFGSignificanceInterface } from '../interfaces/IFGSignificanceInterface';
import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';
import { FConveyorBeltItems } from '../structs/FConveyorBeltItems';

import { AFGBuildable } from './AFGBuildable';
import { UPresistentConveyorPackagingData } from './UPresistentConveyorPackagingData';

export interface AFGBuildableConveyorBase extends AFGBuildable, IFGSignificanceInterface {
  /**
   * held here, but created by conveyors when replicated, as we don't want to create it unless it's used.
   */
  PresistentConveyorPackagingDataObject: UPresistentConveyorPackagingData;

  /**
   * Speed of this conveyor.
   */
  mSpeed: float;

  /**
   * All the locally simulated resource offsets on the conveyor belt.
   */
  mItems: FConveyorBeltItems;

  /**
   * First connection on conveyor belt, Connections are always in the same order, mConnection0 is the input, mConnection1 is the output.
   */
  mConnection0: Unknown<'UFGFactoryConnectionComponent'>;

  /**
   * Second connection on conveyor belt
   */
  mConnection1: Unknown<'UFGFactoryConnectionComponent'>;
}
