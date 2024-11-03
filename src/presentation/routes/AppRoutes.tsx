import { Routes, Route } from "react-router-dom";
import NotFoundPage from "@pages/not-found/NotFoundPage";
import routes from "./routes";
import NotRequireAuth from "@components/auth/NotRequireAuth";
import RequireAuth from "@components/auth/RequireAuth";
import { Suspense } from "react";
import DashboardLoading from "@components/loader/DashboardLoading";

/**
 * AppRoutes component renders the application's route configuration.
 * It maps through the `routes` array and creates a <Route> for each route.
 *
 * - If the route requires authentication (`isAuth`), it wraps the route's element with <RequireAuth>.
 * - If the route does not require authentication, it wraps the route's element with <NotRequireAuth> and <Suspense> for lazy loading.
 *
 * Additionally, it includes a fallback route that renders a <NotFoundPage> for any unmatched paths.
 *
 * @returns {JSX.Element} The rendered routes for the application.
 */
const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((res) => (
        <Route
          key={res.path}
          path={res.path}
          element={
            res.isAuth ? (
              <RequireAuth>{res.element}</RequireAuth>
            ) : (
              <NotRequireAuth>
                <Suspense fallback={<DashboardLoading />}>
                  {res.element}
                </Suspense>
              </NotRequireAuth>
            )
          }
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
