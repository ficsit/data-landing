export enum ESignElementType {
  ESET_Scene,
  ESET_Text,
  ESET_SpriteIcon,
}

export const ESignElementTypeDisplayName = {
  [ESignElementType.ESET_Scene]: 'Scene Component',
  [ESignElementType.ESET_Text]: 'Text Input',
  [ESignElementType.ESET_SpriteIcon]: 'Image',
};
