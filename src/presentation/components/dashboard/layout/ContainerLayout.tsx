import tailwindMerge from "../../../../infrastructure/lib/utils/tailwindMerge";
import IContainerLayoutProps from "./ContainerLayout.interface";

import './ContainerLayout.style.css'

const ContainerLayout = ({
  children,
  isFullSidebar,
  isHoverChildren,
}: IContainerLayoutProps): JSX.Element => {
  return (
    <div
      className={tailwindMerge(
        "tw-min-h-screen tw-bg-background tw-overflow-hidden tw-m-0 tw-transition-all tw-transition-width-opacity tw-opacity-100 tw-duration-500",
        isFullSidebar
          ? "on-sidebar-visible"
          : isHoverChildren
          ? "on-sidebar-visible"
          : "on-sidebar-invisible"
      )}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
