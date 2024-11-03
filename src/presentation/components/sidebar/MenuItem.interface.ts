interface IMenuItemType {
  isActive: boolean;
  id: number;
  name: string;
  isHasChild: boolean;
  child: any[];
  link: string;
  menuId: number;
  iconType: string;
  pathName: string;
  isFullSidebar: boolean;
  isHoverChildren: boolean;
  isShowChild: boolean;
}

export default IMenuItemType;
