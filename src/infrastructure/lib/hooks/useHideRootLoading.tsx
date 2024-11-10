import { useEffect, useCallback } from "react";

const useHideRootLoading = () => {
  const hiddenRootLoading = useCallback(() => {
    const rootSpinner = document.getElementById("root-spinner");
    const body = document.getElementById("body");
    setTimeout(() => {
      if (rootSpinner) {
        rootSpinner.classList.add("hidden-spinner");
      }
      if (body) {
        body.style.overflowY = "auto";
      }
    }, 1000);
  }, []);

  useEffect(() => {
    hiddenRootLoading();
  }, [hiddenRootLoading]);
};

export default useHideRootLoading;