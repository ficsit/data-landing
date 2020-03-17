import { Unknown } from '../native/unknown';

export interface UFGColoredInstanceMeshProxy extends Unknown<'UStaticMeshComponent'> {
  mCanBecolored: boolean;

  mBlockInstancing: boolean;
}
