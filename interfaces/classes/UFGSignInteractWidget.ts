import { Unknown } from '../native/unknown';
import { FSignData } from '../structs/FSignData';

import { UFGInteractWidget } from './UFGInteractWidget';
import { UFGSignCanvasWidget } from './UFGSignCanvasWidget';
import { UFGSignElementListWidget } from './UFGSignElementListWidget';
import { UFGSignElementSettingsWidget } from './UFGSignElementSettingsWidget';

export interface UFGSignInteractWidget extends UFGInteractWidget {
  /**
   * Widget reference that holds a list of all active elements and allows for creation / deletion of sign elements
   */
  mElementListWidget: UFGSignElementListWidget;

  /**
   * Container (Canvas Panel) to add the appropriate settings widget to when an element is selected
   */
  mElementSettingsContainer: Unknown<'UOverlay'>;

  /**
   * Size box from where we determine the drawing canvases maximum size constraints
   */
  mCanvasSizeBox: Unknown<'USizeBox'>;

  /**
   * Panel to hold the FGSignCanvas ( dimensions will never be skewed )
   */
  mCanvasContainer: Unknown<'UCanvasPanel'>;

  /**
   * Custom widget that holds the panel for which actual sign elements are added
   */
  mSignCanvasWidget: UFGSignCanvasWidget;

  /**
   * Created at runtime, can be null if no element is selected
   */
  mElementSettingsWidget: UFGSignElementSettingsWidget;

  mSignData: FSignData;
}
