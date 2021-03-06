import { EFactoryConnectionConnector } from '../enums/EFactoryConnectionConnector';
import { EFactoryConnectionDirection } from '../enums/EFactoryConnectionDirection';
import { float, int32 } from '../native/primitive';

import { AFGBuildable } from './AFGBuildable';
import { UFGConnectionComponent } from './UFGConnectionComponent';
import { UFGInventoryComponent } from './UFGInventoryComponent';

export interface UFGFactoryConnectionComponent extends UFGConnectionComponent {
  /**
   * Physical type of connector used for this connection.
   */
  mConnector: EFactoryConnectionConnector;

  /**
   * Direction for this connection.
   */
  mDirection: EFactoryConnectionDirection;

  /**
   * How long the connector is extending, indicates where the connected conveyor may start turning.
   */
  mConnectorClearance: float;

  /**
   * Connection to another component. If this is set we're connected.
   */
  mConnectedComponent: UFGFactoryConnectionComponent;

  /**
   * Light-weight connected indication for clients.
   */
  mHasConnectedComponent: boolean;

  /**
   * The inventory of this connection
   */
  mConnectionInventory: UFGInventoryComponent;

  /**
   * The inventory index utilized by this connection ( -1 for none specified )
   */
  mInventoryAccessIndex: int32;

  /**
   * Buildable owning us, cached for performance
   */
  mOuterBuildable: AFGBuildable;

  /**
   * Forward implementation details to our owner.
   */
  mForwardPeekAndGrabToBuildable: boolean;
}
