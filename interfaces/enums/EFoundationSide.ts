export enum EFoundationSide {
  FoundationFront,
  FoundationRight,
  FoundationBack,
  FoundationLeft,
  FoundationTop,
  FoundationBottom,
  FoundationNumSides,
}

export const EFoundationSideDisplayName = {
  [EFoundationSide.FoundationFront]: 'Front',
  [EFoundationSide.FoundationRight]: 'Right',
  [EFoundationSide.FoundationBack]: 'Back',
  [EFoundationSide.FoundationLeft]: 'Left',
  [EFoundationSide.FoundationTop]: 'Top',
  [EFoundationSide.FoundationBottom]: 'Bottom',
  [EFoundationSide.FoundationNumSides]: 'Num Sides',
};
