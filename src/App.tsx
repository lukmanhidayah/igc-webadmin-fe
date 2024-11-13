import useHideRootLoading from "./infrastructure/lib/hooks/useHideRootLoading";
import AppRoutes from "@routes/AppRoutes";
import { ConfigProvider } from "antd";
import config from "@config/app.config";

import "@services/i18n";

const App = () => {
  useHideRootLoading();

  const customTheme = {
    token: {
      colorPrimary: config.colors.primary,
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div className="app">
        <AppRoutes />
      </div>
    </ConfigProvider>
  );
};

export default App;
