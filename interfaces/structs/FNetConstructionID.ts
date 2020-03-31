import { int8, uint16 } from '../native/primitive';

/**
 * Used to track constructed (spawned) buildables matched with their holograms between client and server
 */
export interface FNetConstructionID {
  NetPlayerID: int8;

  Server_ID: uint16;

  Client_ID: uint16;
}
