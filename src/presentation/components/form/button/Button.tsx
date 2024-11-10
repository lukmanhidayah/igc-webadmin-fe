import tailwindMerge from "../../../../infrastructure/lib/utils/tailwindMerge";
import IButton from "./Button.interface";
import SpinnerLoading from "@components/loader/SpinnerLoading";

const Button: React.FC<IButton> = ({
  loadingColor = "white-spinner",
  ...props
}) => {
  const baseClasses =
    "tw-w-full tw-flex tw-items-center tw-justify-center tw-p-2 tw-font-semibold tw-min-h-[40px]";

  const variantClasses = {
    fullColor: "tw-bg-gray-200 hover:tw-bg-gray-300 tw-shadow",
    outline:
      "tw-border tw-border-[1.5px] tw-border-gray-200 hover:tw-bg-gray-100",
  };

  const roundedClasses = {
    full: "tw-rounded-full",
    middle: "tw-rounded-md",
    small: "tw-rounded",
  };

  const roundedClass = roundedClasses[props.rounded || "small"];

  const disabledClasses = props.disabled
    ? "tw-opacity-50 tw-cursor-not-allowed"
    : "";

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={tailwindMerge(
        baseClasses,
        variantClasses[props.variant || "fullColor"],
        roundedClass,
        disabledClasses,
        props.className
      )}
      disabled={props.disabled}
    >
      {props.loading ? (
        <SpinnerLoading width={18} height={18} type={loadingColor} />
      ) : (
        <>
          {props.icon && props.icon}
          {props.title}
        </>
      )}
    </button>
  );
};

export default Button;
