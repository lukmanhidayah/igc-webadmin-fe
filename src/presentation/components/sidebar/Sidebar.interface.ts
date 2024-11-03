export interface ISidebar {
  onBurgerClick: React.MouseEventHandler<HTMLDivElement>;
  isFullSidebar: boolean;
  isHoverChildren: boolean;
  onMouseEnterMenuItem: React.MouseEventHandler<HTMLUListElement>;
  onMouseLeaveMenuItem: React.MouseEventHandler<HTMLUListElement>;
}

export interface IMenuSidebar {
  menu: object[];
  isShowChild: boolean;
  menuId: number;
  iconType: string;
  menuName: string;
  url: string;
}
