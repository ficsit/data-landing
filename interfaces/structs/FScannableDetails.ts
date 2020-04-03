import { UFGSchematic } from '../classes/UFGSchematic';
import { AActor } from '../native/classes';
import { float, localized } from '../native/primitive';
import { classReference } from '../native/references';
import { Color } from '../native/structs';

export interface FScannableDetails {
  /**
   * Type of object to scan for
   */
  ScannableClass: classReference<AActor>;

  /**
   * Name of object to scan for
   */
  DisplayText: localized;

  /**
   * Scanner light color
   */
  ScannerLightColor: Color;

  PreCacheAllOfType: boolean;

  ShouldOverrideDetectionRange: boolean;

  /**
   * Override the base detection range of the scanner
   */
  NewDetectionRange: float;

  /**
   * Required schematic to search for this object. None means no requirement.
   */
  RequiredSchematic: classReference<UFGSchematic>;
}
