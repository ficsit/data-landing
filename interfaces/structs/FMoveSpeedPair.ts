import { EMoveSpeed } from '../enums/EMoveSpeed';
import { float } from '../native/primitive';

export interface FMoveSpeedPair {
  MoveSpeedType: EMoveSpeed;

  Speed: float;
}
