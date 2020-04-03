import { UObject } from '../native/classes';
import { float } from '../native/primitive';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

export interface UFGInteractWidget extends Unknown<'UUserWidget'> {
  /**
   * If we should take the keyboard input from the player. The player won't be able to move around.
   */
  mUseKeyboard: boolean;

  /**
   * If we should take the mouse input from the player. The player won't be able to look around.
   */
  mUseMouse: boolean;

  /**
   * Decides if we should share input with game or capture it completely
   */
  mCaptureInput: boolean;

  /**
   * Decides if the widget should restore focus when it looses it. (e.g. when the user clicks outside of the widget)
   */
  mRestoreFocusWhenLost: boolean;

  /**
   * There need to be a clear hierarchy of how input is handled and what to pass and not pass and if the default is pass all or pass none.
   */
  mInputToPassThrough: string[];

  /**
   * Our desired horizontal alignment
   */
  mDesiredHorizontalAlignment: Unknown<'EHorizontalAlignment'>;

  /**
   * Our desired vetical alignment
   */
  mDesiredVerticalAlignment: Unknown<'EVerticalAlignment'>;

  /**
   * Our desired horizontal size
   */
  mDesiredAlignmentSize: Unknown<'FSlateChildSize'>;

  /**
   * Object that we interacted with in order to show this widget ( can be nullPeter )
   */
  mInteractObject: UObject;

  /**
   * Class of the default widget we want to give focus to
   */
  mDefaultFocusWidgetClass: classReference<Unknown<'UUserWidget'>>;

  /**
   * Should gamepad act as cursor when using this widget?
   */
  mUseGamepadCursor: boolean;

  /**
   * The rate for the timer that triggers the custom tick. If <= 0.f no timer will be started
   */
  mCustomTickRate: float;

  /**
   * True if the custom tick event be called on construct. If <= 0.f no event will be triggered
   */
  mCallCustomTickOnConstruct: boolean;

  /**
   * Used to give focus to an object when nothing else has focus
   */
  mDefaultFocusWidget: Unknown<'UWidget'>;

  /**
   * Does this widget support stacking widgets on top?
   */
  mSupportsStacking: boolean;
}
