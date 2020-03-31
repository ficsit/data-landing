export enum ECompassViewDistance {
  CVD_Off,
  CVD_Near,
  CVD_Mid,
  CVD_Far,
  CVD_Always,
}

export namespace ECompassViewDistance {
  export const DisplayName = {
    [ECompassViewDistance.CVD_Off]: 'Off',
    [ECompassViewDistance.CVD_Near]: 'Near',
    [ECompassViewDistance.CVD_Mid]: 'Mid',
    [ECompassViewDistance.CVD_Far]: 'Far',
    [ECompassViewDistance.CVD_Always]: 'Always',
  };
}
