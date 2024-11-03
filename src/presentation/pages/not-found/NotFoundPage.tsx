import NotFoundIcon from "@components/icon/NotFoundIcon";

const NotFoundPage = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-bg-background tw-flex tw-justify-center tw-items-center">
      <div className="tw-p-4 tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded tw-text-center">
        <NotFoundIcon data-testid="not-found-icon" width={256} height={256} className="tw-text-primary-500" />
        <h1 className="tw-font-bold tw-text-lg">404 Not Found</h1>
        <p className="tw-text-center">
          The page is no exist yet or no longer exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
