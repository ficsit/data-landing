import { EResourceForm } from '../enums/EResourceForm';
import { IFGExtractableResourceInterface } from '../interfaces/IFGExtractableResourceInterface';
import { ScriptInterface, classReference } from '../native/references';

import { AFGBuildableResourceExtractor } from './AFGBuildableResourceExtractor';
import { AFGFactoryHologram } from './AFGFactoryHologram';
import { UFGConstructDisqualifier } from './UFGConstructDisqualifier';
import { UFGResourceDescriptor } from './UFGResourceDescriptor';

export interface AFGResourceExtractorHologram extends AFGFactoryHologram {
  /**
   * What form can the overlapping resources be in.
   */
  mAllowedResourceForms: EResourceForm[];

  /**
   * Class of disqualifier to display when not snapped to a resource ( copied from buildable )
   */
  mMustPlaceOnResourceDisqualifier: classReference<UFGConstructDisqualifier>;

  /**
   * If this buildable only allows certain resources for placement, this is the list of those taken from the buildable
   */
  mAllowedResources: classReference<UFGResourceDescriptor>[];

  /**
   * The resource node we snapped to.
   */
  mSnappedExtractableResource: ScriptInterface<IFGExtractableResourceInterface>;

  mUpgradeTarget: AFGBuildableResourceExtractor;
}
