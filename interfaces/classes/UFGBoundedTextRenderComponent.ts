import { TextRenderComponent } from '../native/structs';
import { Unknown } from '../native/unknown';

export interface UFGBoundedTextRenderComponent extends TextRenderComponent {
  mBoundingBox: Unknown<'UBoxComponent'>;
}
