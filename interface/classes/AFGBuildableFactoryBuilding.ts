import { AFGBuildable } from './AFGBuildable';
import { UFGColoredInstanceMeshProxy } from './UFGColoredInstanceMeshProxy';

export interface AFGBuildableFactoryBuilding extends AFGBuildable {
  /**
   * Mesh component for the factory building.
   */
  mMeshComponentProxy: UFGColoredInstanceMeshProxy;
}
