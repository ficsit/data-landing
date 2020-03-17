import { float } from '../native/primitive';
import { Unknown } from '../native/unknown';

/**
 *
 */
export interface UFGCollectionParamUniformFloat {
  Collection: Unknown<'UMaterialParameterCollection'>;

  WindDirectionParamName: string;

  WindIntensityParamName: string;

  IntensityMin: float;

  IntensityMax: float;
}
