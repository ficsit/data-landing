import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGSignCanvasWidget } from './UFGSignCanvasWidget';
import { UFGSignElementData } from './UFGSignElementData';
import { UFGSignElementDragWidget } from './UFGSignElementDragWidget';
import { UFGSignElementSettingsWidget } from './UFGSignElementSettingsWidget';

export interface UFGSignElementWidget {
  /**
   * Border widget to indicate object selection
   */
  mSelectionBorder: Unknown<'UBorder'>;

  /**
   * Specify the widget to virually represent being dragged
   */
  mDragWidgetClass: classReference<Unknown<'UUserWidget'>>;

  mSignElementSettingsWidget: classReference<UFGSignElementSettingsWidget>;

  /**
   * Reference to the sign element being dragged
   */
  mDragElement: UFGSignElementDragWidget;

  /**
   * Reference to the parent SignCanvasWidget
   */
  mCanvasParent: UFGSignCanvasWidget;

  /**
   * Reference to the element data represented by this widget
   */
  mElementData: UFGSignElementData;

  /**
   * Keep a reference to the panel slot this is stored in the FGSignCanvasWidget
   */
  mPanelSlot: Unknown<'UCanvasPanelSlot'>;
}
