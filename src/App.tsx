import useHideRootLoading from "./infrastructure/lib/hooks/useHideRootLoading";
import AppRoutes from "@routes/AppRoutes";
import "@services/i18n";

const App = () => {
  useHideRootLoading();

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
};

export default App;
