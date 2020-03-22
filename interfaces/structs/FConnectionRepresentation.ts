import { UFGConnectionComponent } from '../classes/UFGConnectionComponent';
import { Unknown } from '../native/unknown';

export interface FConnectionRepresentation {
  mConnectionComponent: UFGConnectionComponent;

  mConnectionRepresentation: Unknown<'UStaticMeshComponent'>;
}
