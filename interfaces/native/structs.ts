import { float, uint8 } from './primitive';

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
