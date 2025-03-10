import { SVGProps } from "react";

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"Calendar"}</title>
    <rect
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      x={48}
      y={80}
      width={416}
      height={384}
      rx={48}
    />
    <circle cx={296} cy={232} r={24} />
    <circle cx={376} cy={232} r={24} />
    <circle cx={296} cy={312} r={24} />
    <circle cx={376} cy={312} r={24} />
    <circle cx={136} cy={312} r={24} />
    <circle cx={216} cy={312} r={24} />
    <circle cx={136} cy={392} r={24} />
    <circle cx={216} cy={392} r={24} />
    <circle cx={296} cy={392} r={24} />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      d="M128 48v32m256-32v32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M464 160H48"
    />
  </svg>
);

export default CalendarIcon;
