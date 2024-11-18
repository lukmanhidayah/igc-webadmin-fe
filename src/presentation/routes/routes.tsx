import CertificatePage from "@pages/certificate/CertificatePage";
import CustomerPage from "@pages/customer/CustomerPage";
import DashboardPage from "@pages/dashboard/DashboardPage";
import LoginPage from "@pages/login/LoginPage";
import MemoPage from "@pages/memo/MemoPage";
import TrashPage from "@pages/trash/TrashPage";

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
    path: "/customer",
    isAuth: true,
    element: <CustomerPage />,
  },
  {
    path: "/trash",
    isAuth: true,
    element: <TrashPage />,
  },
];

export default routes;
