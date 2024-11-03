/**
 * Represents a menu item in the dashboard and response api.
 *
 * @interface IMenu
 * @property {number} menuId - The unique identifier for the menu.
 * @property {boolean} isShowChild - Indicates whether the child menu items should be shown.
 * @property {string} iconType - The type of icon associated with the menu.
 * @property {string} menuName - The name of the menu.
 * @property {string} url - The URL associated with the menu.
 */
export interface IMenu {
  menuId: number;
  isShowChild: boolean;
  iconType: string;
  menuName: string;
  url: string;
  menu?: IMenu[];
}

/**
 * Represents the state of the dashboard.
 *
 * @interface IDashboardState
 * @property {Array<(IMenu & { menu: IMenu[] })>} sidebar - An array of sidebar items,
 * each of which is an object that extends IMenu and contains a nested array of IMenu items.
 */
export interface IDashboardState {
  sidebar: (IMenu & {
    menu: IMenu[];
  })[];
}
