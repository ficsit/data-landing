import { FSlateBrush } from '../native/assets';
import { classReference } from '../native/references';
import { Unknown } from '../native/unknown';

import { UFGSignElementDragDrop } from './UFGSignElementDragDrop';
import { UFGSignElementDragWidget } from './UFGSignElementDragWidget';
import { UFGSignElementWidget } from './UFGSignElementWidget';
import { UFGSignInteractWidget } from './UFGSignInteractWidget';

export interface UFGSignCanvasWidget extends Unknown<'UUserWidget'> {
  /**
   * Size Box that holds our Canvas, its size is set to absolute and the canvas fills that space
   */
  mCanvasSizeBox: Unknown<'USizeBox'>;

  /**
   * The canvas panel where actual sign elements will be added
   */
  mCanvasPanel: Unknown<'UCanvasPanel'>;

  mSelectionBrushTemplate: FSlateBrush;

  mDefaultElementClass: classReference<UFGSignElementWidget>;

  mTextElementClass: classReference<UFGSignElementWidget>;

  mIconElementClass: classReference<UFGSignElementWidget>;

  mDragAndDrop: UFGSignElementDragDrop;

  mDragElement: UFGSignElementDragWidget;

  mElementWidgets: UFGSignElementWidget[];

  /**
   * Reference to the currently selected widget
   */
  mSelectedElement: UFGSignElementWidget;

  mInteractWidget: UFGSignInteractWidget;
}
