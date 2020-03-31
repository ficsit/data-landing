/**
 * Steps in the intro tutorial
 */
export enum EIntroTutorialSteps {
  ITS_NONE,
  ITS_INTRO,
  ITS_DISMANTLE_POD,
  ITS_STUN_SPEAR,
  ITS_IRON_ORE,
  ITS_HUB,
  ITS_HUB_LVL1,
  ITS_HUB_LVL1_5,
  ITS_HUB_LVL2,
  ITS_HUB_LVL3,
  ITS_HUB_LVL4,
  ITS_HUB_LVL5,
  ITS_DONE,
}

export namespace EIntroTutorialSteps {
  export const DisplayName = {
    [EIntroTutorialSteps.ITS_NONE]: 'No tutorial',
    [EIntroTutorialSteps.ITS_INTRO]: 'Intro state with message',
    [EIntroTutorialSteps.ITS_DISMANTLE_POD]: 'Dismantle drop pod',
    [EIntroTutorialSteps.ITS_STUN_SPEAR]: 'Equip stun spear',
    [EIntroTutorialSteps.ITS_IRON_ORE]: 'Pick up iron ore',
    [EIntroTutorialSteps.ITS_HUB]: 'Build a hub',
    [EIntroTutorialSteps.ITS_HUB_LVL1]: 'Upgrade Hub to lvl 1',
    [EIntroTutorialSteps.ITS_HUB_LVL1_5]: 'Upgrade Hub to lvl 1.5',
    [EIntroTutorialSteps.ITS_HUB_LVL2]: 'Upgrade Hub to lvl 2',
    [EIntroTutorialSteps.ITS_HUB_LVL3]: 'Upgrade Hub to lvl 3',
    [EIntroTutorialSteps.ITS_HUB_LVL4]: 'Upgrade Hub to lvl 4',
    [EIntroTutorialSteps.ITS_HUB_LVL5]: 'Upgrade Hub to lvl 5',
    [EIntroTutorialSteps.ITS_DONE]: 'Done with intro',
  };
}
