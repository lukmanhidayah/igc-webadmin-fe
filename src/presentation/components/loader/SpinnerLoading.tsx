import ISpinnerLoading from "./SpinnerLoading.interface";

import "./SpinnerLoading.style.css";

const SpinnerLoading = ({
  type = "white-spinner",
  width,
  height,
  strokeWidth = 4,
}: ISpinnerLoading): JSX.Element => {
  const className = `${type}__value`;

  return (
    <svg
      className={type}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <circle className={className} cx={12} cy={12} r={10} />
      <circle className={className} cx={12} cy={12} r={10} />
      <circle className={className} cx={12} cy={12} r={10} />
      <circle className={className} cx={12} cy={12} r={10} />
      <circle className={className} cx={12} cy={12} r={10} />
      <circle className={className} cx={12} cy={12} r={10} />
    </svg>
  );
};

export default SpinnerLoading;
