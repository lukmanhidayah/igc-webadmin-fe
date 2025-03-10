import { SVGProps } from "react";
const CertIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={32}
    viewBox="0 0 28 32"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.75 13.315V2.17A2.174 2.174 0 0 0 20.578 0H2.922A2.174 2.174 0 0 0 .75 2.171v23.156c0 1.198.975 2.172 2.172 2.172H16.25v3.5a1 1 0 0 0 1.496.868l3.004-1.716c3.317 1.895 3.144 1.848 3.5 1.848a1 1 0 0 0 1-1v-6.814c3.558-3.42 2.149-9.363-2.5-10.87ZM2.922 25.499a.171.171 0 0 1-.172-.172V2.171A.172.172 0 0 1 2.922 2h17.656a.171.171 0 0 1 .172.171V13a6.507 6.507 0 0 0-6.5 6.5c0 1.84.768 3.502 2 4.686v1.314H2.922Zm20.328 3.777-2.004-1.145a1 1 0 0 0-.992 0l-2.004 1.145v-3.777a6.493 6.493 0 0 0 5 0v3.777Zm-2.5-5.277a4.505 4.505 0 0 1-4.5-4.5c0-2.481 2.018-4.5 4.5-4.5 2.48 0 4.5 2.019 4.5 4.5s-2.02 4.5-4.5 4.5Z"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      fill="currentColor"
      d="M20.249 22.062c-.39 0-.44-.093-2.054-1.168a1 1 0 1 1 1.11-1.664l.667.445 1.446-2.168a1 1 0 0 1 1.664 1.11l-2 3a1 1 0 0 1-.833.445ZM15.249 7H6.75a1 1 0 0 1 0-2h8.5a1 1 0 1 1 0 2Zm0 4H6.75a1 1 0 0 1 0-2h8.5a1 1 0 1 1 0 2Zm-3.499 4h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Z"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default CertIcon;
