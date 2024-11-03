import { SVGProps } from "react";

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="currentColor"
    viewBox="0 0 28 28"
    xmlSpace="preserve"
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
      <path
        d="M14 13a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM16.883 15h-5.766A7.126 7.126 0 0 0 4 22.118 4.887 4.887 0 0 0 8.882 27h10.235A4.888 4.888 0 0 0 24 22.117 7.125 7.125 0 0 0 16.883 15zm2.234 10H8.882A2.886 2.886 0 0 1 6 22.117 5.122 5.122 0 0 1 11.117 17h5.766A5.124 5.124 0 0 1 22 22.118 2.886 2.886 0 0 1 19.117 25z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </g>
  </svg>
);

export default UserIcon;
