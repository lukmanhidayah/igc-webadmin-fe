/**
 * DashboardLoading component renders a loading skeleton for the dashboard specially for fallback suspense.
 *
 * This component displays a full-width container with padding, containing a white background
 * box with rounded corners and shadow. Inside the box, there are two animated pulse skeleton
 * elements to simulate loading text, and a border at the bottom.
 *
 * @component
 * @example
 * return (
 *   <DashboardLoading />
 * )
 *
 * @returns {JSX.Element} A JSX element representing the loading skeleton.
 */
const DashboardLoading = (): JSX.Element => {
  return (
    <div className="tw-w-full tw-p-6">
      <div className="tw-w-full tw-rounded tw-shadow tw-bg-white min-h-screen-with-header">
        <div className="tw-px-4 tw-py-6 tw-border-b">
          <div
            data-testid="skeleton-1"
            className="tw-w-[200px] tw-h-[15px] tw-animate-pulse tw-mt-2 tw-rounded-full tw-bg-skeleton"
          ></div>
          <div
            data-testid="skeleton-2"
            className="tw-w-[150px] tw-h-[10px] tw-animate-pulse tw-mt-2 tw-rounded-full tw-bg-skeleton"
          ></div>
        </div>
        <div
          data-testid="border"
          className="tw-h-[80px] tw-w-full tw-border-b"
        ></div>
      </div>
    </div>
  );
};

export default DashboardLoading;
