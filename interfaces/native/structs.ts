import { float, uint8 } from './primitive';
import { classReference } from './references';

/**
 * A linear, 32-bit/component floating point RGBA color.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/Core/Math/FLinearColor/index.html
 */
export interface LinearColor {
  /** The color's red intensity. */
  R: float;
  /** The color's green intensity. */
  G: float;
  /** The color's blue intensity. */
  B: float;
  /** The color's opacity. */
  A: float;
}

/**
 * [FColor](API\Runtime\Core\Math\FColor) Stores a color with 8 bits of precision per channel.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/Core/Math/FColor/index.html
 */
export interface Color {
  /** The color's red intensity. */
  R: uint8;
  /** The color's green intensity. */
  G: uint8;
  /** The color's blue intensity. */
  B: uint8;
  /** The color's opacity. */
  A: uint8;
}

/**
 * A vector in 3-D space composed of components (X, Y, Z) with floating point precision.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/Core/Math/FVector/index.html
 */
export interface Vector {
  /** The vector's X component. */
  X: float;
  /** The vector's Y component. */
  Y: float;
  /** The vector's Z component. */
  Z: float;
}

/**
 * A translatable string
 */
export interface TextProperty {
  /** The namespace of this string */
  namespace: string;

  /** The key of this string */
  key: string;

  /** The source of this string */
  sourceString: string;
}

export interface Rotator {
  pitch: number;
  yaw: number;
  roll: number;
}

export interface BlueprintGeneratedClass {
  SimpleConstructionScript: classReference<any>;
  UberGraphFramePointerProperty: classReference<any>;
  UberGraphFunction: classReference<any>;
}

export enum EComponentMobility {
  Static,
  Stationary,
  Movable,
}

export namespace EComponentMobility {
  export const DisplayName = {
    [EComponentMobility.Static]: 'Static',
    [EComponentMobility.Stationary]: 'Small',
    [EComponentMobility.Movable]: 'Movable',
  };
}

export interface BoxComponent {
  BoxExtent: Vector;
  AreaClass: classReference<any>;
  RelativeLocation: Vector;
  Mobility: EComponentMobility;
}

export interface Guid {
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface SCS_Node {
  ComponentClass: classReference<any>;
  ComponentTemplate: classReference<any>;
  VariableGuid: Guid;
  InternalVariableName: string;
}

export interface SimpleConstructionScript {
  RootNodes: classReference<any>[];
  AllNodes: classReference<any>[];
  DefaultSceneRootNode: classReference<any>;
}

export enum EVisibilityBasedAnimTickOption {
  AlwaysTickPoseAndRefreshBones,
  AlwaysTickPose,
  OnlyTickMontagesWhenNotRendered,
  OnlyTickPoseWhenRendered,
}

export namespace EVisibilityBasedAnimTickOption {
  export const DisplayName = {
    [EVisibilityBasedAnimTickOption.AlwaysTickPoseAndRefreshBones]: 'AlwaysTickPoseAndRefreshBones',
    [EVisibilityBasedAnimTickOption.AlwaysTickPose]: 'AlwaysTickPose',
    [EVisibilityBasedAnimTickOption.OnlyTickMontagesWhenNotRendered]: 'OnlyTickMontagesWhenNotRendered',
    [EVisibilityBasedAnimTickOption.OnlyTickPoseWhenRendered]: 'OnlyTickPoseWhenRendered',
  };
}

export interface SkeletalMeshComponent {
  AnimClass: classReference<any>;
  ClothingSimulationFactory: classReference<any>;
  SkeletalMesh: classReference<any>;
  VisibilityBasedAnimTickOption: EVisibilityBasedAnimTickOption;
  bPerBoneMotionBlur: boolean;
  bComponentUseFixedSkelBounds: boolean;
  LDMaxDrawDistance: number;
  CachedMaxDrawDistance: number;
  bAllowCullDistanceVolume: boolean;
}

export interface BodyInstance {
  ObjectType: any;
  CollisionProfileName: string;
}

export interface SpotLightComponent {
  InnerConeAngle: number;
  LightShaftConeAngle: number;
  OuterConeAngle: number;
}

export interface PointLightComponent {
  SourceRadius: number;
  SourceLength: number;
  SoftSourceRadius: number;
  LightFalloffExponent: number;
  bUseInverseSquaredFalloff: boolean;
}

export interface StaticMeshComponent {
  StaticMesh: classReference<any>;
  BodyInstance: BodyInstance;
  RelativeLocation: Vector;
  RelativeScale3D: Vector;
  Mobility: EComponentMobility;
}

export enum EHorizTextAligment {
  EHTA_Left,
  EHTA_Center,
  EHTA_Right,
}

export namespace EHorizTextAligment {
  export const DisplayName = {
    [EHorizTextAligment.EHTA_Left]: 'EHTA_Left',
    [EHorizTextAligment.EHTA_Center]: 'EHTA_Center',
    [EHorizTextAligment.EHTA_Right]: 'EHTA_Right',
  };
}

export interface TextRenderComponent {
  Text: TextProperty;
  TextMaterial: classReference<any>;
  Font: classReference<any>;
  HorizontalAlignment: EHorizTextAligment;
  TextRenderColor: Color;
  WorldSize: number;
  RelativeLocation: Vector;
  RelativeRotation: Rotator;
}
