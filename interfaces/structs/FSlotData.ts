import { LinearColor } from '../native/structs';

export interface FSlotData {
  /**
   * The color of the players ping
   */
  PingColor: LinearColor;

  /**
   * The color of the players nametag above their head, and in the UI
   */
  NametagColor: LinearColor;
}
