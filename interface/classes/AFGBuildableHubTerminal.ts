import { AFGBuildable } from './AFGBuildable';
import { AFGBuildableTradingPost } from './AFGBuildableTradingPost';

export interface AFGBuildableHubTerminal extends AFGBuildable {
  mTradingPost: AFGBuildableTradingPost;
}
