import { SVGProps } from "react";

const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"Card"}</title>
    <rect
      x={48}
      y={96}
      width={416}
      height={320}
      rx={56}
      ry={56}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={60}
      d="M48 192h416M128 300h48v20h-48z"
    />
  </svg>
);

export default CreditCardIcon;
