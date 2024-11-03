import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSidebar } from "@redux/dashboard/dashboardReduxReducer";
import { selectSidebar } from "@redux/dashboard/dashboardReduxSelector";

/**
 * Custom hook to handle menu item interactions and navigation
 * @param menuId - Unique identifier for the menu item
 * @param link - Navigation URL for the menu item
 * @param isHasChild - Boolean flag indicating if menu item has child items
 * @returns Object containing navigation handlers and menu state
 */
const useMenuItem = (
  menuId: string | number,
  link: string,
  isHasChild: boolean
) => {
  const navigate = useNavigate();
  const listMenu = useSelector(selectSidebar);
  const dispatch = useDispatch();
  const location = useLocation();

  /**
   * Effect to initialize menu state based on current URL path
   * Sets the active menu item on component mount
   */
  useEffect(() => {
    const indexChosen = listMenu.findIndex(
      (res) => res.url === location.pathname.split("/")[1]
    );
    swapMenu(indexChosen, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handles click events on menu items
   * If item has children, toggles submenu visibility
   * Otherwise navigates to the specified link
   */
  const onClickLink = () => {
    if (isHasChild) {
      const indexChosen = listMenu.findIndex((res) => res.menuId === menuId);
      swapMenu(indexChosen);
    } else {
      navigate(link, {
        replace: false,
      });
    }
  };

  /**
   * Toggles the visibility state of a submenu
   * @param indexChosen - Index of the menu item to toggle
   * @param status - Optional forced state for the submenu visibility
   */
  const swapMenu = (indexChosen: number, status?: boolean) => {
    if (indexChosen >= 0) {
      const tempMenu: any = [...listMenu];
      tempMenu[indexChosen] = {
        ...tempMenu[indexChosen],
        isShowChild: status
          ? true
          : tempMenu[indexChosen].isShowChild
          ? false
          : true,
      };
      dispatch(setSidebar(tempMenu));
    }
  };

  /**
   * Navigates to a specific route
   * @param link - URL to navigate to
   */
  const onNavigate = (link: string) => {
    navigate(link, {
      replace: false,
    });
  };

  return { onClickLink, onNavigate, listMenu, location };
};

export default useMenuItem;