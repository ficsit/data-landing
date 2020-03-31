import { Unknown } from '../native/unknown';

export interface FFGKeyMapping {
  ActionKeyMapping: Unknown<'FInputActionKeyMapping'>;

  AxisKeyMapping: Unknown<'FInputAxisKeyMapping'>;

  IsAxisMapping: boolean;
}
