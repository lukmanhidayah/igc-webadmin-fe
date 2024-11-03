import { SVGProps } from "react";
const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" stroke="#526A7A" d="M.5.5h23v23H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 12h16H4Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M4 12h16"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 6h8-8Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M4 6h8"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 18h8-8Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M12 18h8"
      />
    </g>
  </svg>
);
export default BurgerIcon;
