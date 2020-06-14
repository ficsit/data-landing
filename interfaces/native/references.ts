/**
 * Reference to an object described within another package.
 */
export interface packageReference<TClass> {
  package: string;
  name: string;
}

/**
 * Reference to a class.
 */
export type classReference<TClass> = packageReference<TClass>;

/**
 * Reference to an instance of a class.
 */
export type objectReference<TClass> = packageReference<TClass>;

/**
 * Templated version of [FScriptInterface](API\Runtime\CoreUObject\UObjectBase\FScriptInterface),
 * which provides accessors and operators for referencing the interface portion
 * of a [UObjectBase](API\Runtime\CoreUObject\UObjectBase\UObjectBase) that implements a
 * native interface.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TScriptInterface/index.html
 */
export type ScriptInterface<TInterface> = TInterface;

export interface softClassReference<TClass> {
  package: string;
  name: string;
  subPath: string;
  member: string;
}
