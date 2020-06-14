import { packageReference } from './references';

/**
 * A StaticMesh is a piece of geometry that consists of a static set of polygons.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/Engine/Engine/UStaticMesh/index.html
 */
export type UStaticMesh = packageReference<any>;

/**
 * https://docs.unrealengine.com/en-US/API/Runtime/Engine/Engine/UTexture2D/index.html
 */
export type UTexture2D = packageReference<any>;

/**
 * https://docs.unrealengine.com/en-US/API/Runtime/SlateCore/Styling/FSlateBrush/index.html
 */
export type FSlateBrush = packageReference<any>;

//TODO: Find proper instances for this.
export type UMaterialInstance = packageReference<any>;
export type UParticleSystem = packageReference<any>;
export type UMaterial = packageReference<any>;
export type UAkAudioEvent = packageReference<any>;
export type USkeletalMesh = packageReference<any>;
