import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

export interface FSignElementConstraints {
  MinTranslationOffset: Unknown<'FVector2D'>;

  MaxTranslationOffset: Unknown<'FVector2D'>;

  MinScale: float;

  MaxScale: float;
}
