import { AActor } from '../native/classes';

import { AFGBuildableGenerator } from './AFGBuildableGenerator';
import { AFGResourceNode } from './AFGResourceNode';

export interface AFGBuildableGeneratorGeoThermal extends AFGBuildableGenerator {
  mExtractResourceNode: AFGResourceNode;

  mExtractableResource: AActor;
}
