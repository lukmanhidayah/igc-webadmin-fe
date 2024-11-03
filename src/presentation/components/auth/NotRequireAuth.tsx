import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import INotRequireAuthProps from "./NotRequireAuth.interface";
import { selectToken } from "@redux/user/userReduxSelector";
import { selectSidebar } from "@redux/dashboard/dashboardReduxSelector";
import isNullOrEmpty from "@lib/utils/isNullOrEmpty";
import logger from "@lib/utils/logger";

const NotRequireAuth: React.FC<INotRequireAuthProps> = ({ children }) => {
  const token = useSelector(selectToken);
  const location = useLocation();
  const menus = useSelector(selectSidebar);

  const path =
    menus[0]?.menu?.length > 0 ? menus[0]?.menu[0]?.url : menus[0]?.url;

  logger(path);

  return isNullOrEmpty(token) ? (
    children
  ) : (
    <Navigate to={path} replace state={{ path: location.pathname }} />
  );
};

export default NotRequireAuth;
