/**
 * Reference to an object described within another package.
 */
export type packageReference<TClass> = {
  package: string;
  name: string;
};

/**
 * Reference to a class.
 */
export type classReference<TClass> = packageReference<TClass>;

/**
 * Reference to an instance of a class.
 */
export type objectReference<TClass> = packageReference<TClass>;

/**
 * Templated version of [FScriptInterface](API\Runtime\CoreUObject\UObject\FScriptInterface),
 * which provides accessors and operators for referencing the interface portion
 * of a [UObject](API\Runtime\CoreUObject\UObject\UObject) that implements a
 * native interface.
 *
 * https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TScriptInterface/index.html
 */
export type ScriptInterface<TInterface> = TInterface;
