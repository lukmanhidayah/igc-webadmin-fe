import IHeaderContent from "./HeaderContent.interface";

const HeaderContent = ({
  title,
  children,
  description,
  className = "xss:tw-items-center",
}: IHeaderContent) => {
  return (
    <div
      className={`${className} tw-flex tw-flex-col x1000:tw-flex-row tw-gap-4 tw-items-start tw-justify-between tw-p-4 tw-border-b`}
    >
      <div className="tw-w-full tw-flex-1">
        <h1 className="tw-font-semibold tw-text-primary tw-text-lg">{title}</h1>
        {description && (
          <p className="tw-text-gray-500 tw-text-sm">{description}</p>
        )}
      </div>
      <div className="tw-w-full">{children}</div>
    </div>
  );
};

export default HeaderContent;
