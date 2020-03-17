import { EIgnore } from '../enums/EIgnore';
import { IFGAggroTargetInterface } from '../interfaces/IFGAggroTargetInterface';
import { float } from '../native/primitive';
import { ScriptInterface } from '../native/references';

export interface FAggroEntry {
  AggroTarget: ScriptInterface<IFGAggroTargetInterface>;

  Aggro: float;

  LastHurtTime: float;

  Ignore: EIgnore;
}
