import { SVGProps } from "react";
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={13}
    fill="none"
    viewBox="0 0 22 13"
    strokeWidth={2}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" d="m1 1 10 10L21 1" />
  </svg>
);
export default ArrowDownIcon;
