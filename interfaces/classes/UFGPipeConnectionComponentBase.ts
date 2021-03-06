import { EPipeConnectionType } from '../enums/EPipeConnectionType';
import { float } from '../native/primitive';

import { UFGConnectionComponent } from './UFGConnectionComponent';

export interface UFGPipeConnectionComponentBase extends UFGConnectionComponent {
  /**
   * Specifies the type of connection this is, used to determine attachment potential
   */
  mPipeConnectionType: EPipeConnectionType;

  /**
   * How long the connector is extending, indicates where the connected pipe may start turning.
   */
  mConnectorClearance: float;

  /**
   * used to find matching types for snapping and so on
   */
  mPipeType: string;

  /**
   * Connection to another component. If this is set we're connected.
   */
  mConnectedComponent: UFGPipeConnectionComponentBase;
}
