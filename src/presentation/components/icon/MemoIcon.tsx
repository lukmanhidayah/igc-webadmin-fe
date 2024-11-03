import { SVGProps } from "react";
const MemoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={28}
    viewBox="0 0 26 28"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.162 1.527H19.6V1a1 1 0 0 0-2 0v.527H14V1a1 1 0 0 0-2 0v.527H8.4V1a1 1 0 0 0-2 0v.527H3.839A3.04 3.04 0 0 0 .803 4.563v20.4A3.04 3.04 0 0 0 3.838 28h18.324a3.04 3.04 0 0 0 3.036-3.036V4.563a3.04 3.04 0 0 0-3.036-3.036Zm1.036 23.437c0 .571-.465 1.036-1.036 1.036H3.838a1.037 1.037 0 0 1-1.036-1.036V4.563c0-.571.465-1.036 1.036-1.036H6.4v.527a1 1 0 0 0 2 0v-.527H12v.527a1 1 0 1 0 2 0v-.527h3.6v.527a1 1 0 1 0 2 0v-.527h2.562c.571 0 1.036.465 1.036 1.036v20.401Z"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      fill="currentColor"
      d="M18.09 14.527H7.91a1 1 0 0 0 0 2h10.18a1 1 0 1 0 0-2Zm0 5.09H7.91a1 1 0 0 0 0 2h10.18a1 1 0 1 0 0-2Zm-10.18-8.18h4.072a1 1 0 1 0 0-2H7.91a1 1 0 0 0 0 2Z"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default MemoIcon;
