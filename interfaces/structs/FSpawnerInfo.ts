import { AFGCreatureSpawner } from '../classes/AFGCreatureSpawner';
import { float } from '../native/primitive';

export interface FSpawnerInfo {
  Spawner: AFGCreatureSpawner;

  WithinSpawnRange: boolean;

  DistanceSq: float;
}
