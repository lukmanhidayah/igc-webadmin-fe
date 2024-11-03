import CertificatePage from "@pages/certificate/CertificatePage";
import DashboardPage from "@pages/dashboard/DashboardPage";
import LoginPage from "@pages/login/LoginPage";
import MemoPage from "@pages/memo/MemoPage";
import SettingPage from "@pages/setting/SettingPage";
import UserPage from "@pages/user/UserPage";

type TRoutes = { path: string; isAuth: boolean; element: JSX.Element }[];

const routes: TRoutes = [
  {
    path: "/",
    isAuth: false,
    element: <LoginPage />,
  },
  {
    path: "/login",
    isAuth: false,
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    isAuth: true,
    element: <DashboardPage />,
  },
  {
    path: "/certificate",
    isAuth: true,
    element: <CertificatePage />,
  },
  {
    path: "/memo",
    isAuth: true,
    element: <MemoPage />,
  },
  {
    path: "/user",
    isAuth: true,
    element: <UserPage />,
  },
  {
    path: "/setting",
    isAuth: true,
    element: <SettingPage />,
  },
];

export default routes;
