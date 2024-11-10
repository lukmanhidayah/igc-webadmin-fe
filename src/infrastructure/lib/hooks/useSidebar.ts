import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectSidebar } from "@redux/dashboard/dashboardReduxSelector";

const useSidebar = () => {
  const sidebars = useSelector(selectSidebar);
  const location = useLocation();

  return { sidebars, location };
};

export default useSidebar;
