import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import IRequireAuthProps from "./RequireAuth.interface";
import DashboardLayout from "@components/dashboard/layout/DashboardLayout";
import { selectToken } from "@redux/user/userReduxSelector";
import isNullOrEmpty from "@lib/utils/isNullOrEmpty";

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return !isNullOrEmpty(token) ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
