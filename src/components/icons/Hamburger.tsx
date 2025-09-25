import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.5 25 25"
    width="1em"
    height="1em"
    className="w-6 h-6"
    {...props}
  >
    <path
      fill="inherit"
      d="M5.5 11.75a.75.75 0 0 0 0 1.5zm14 1.5a.75.75 0 0 0 0-1.5zm-11.666 2.5a.75.75 0 0 0 0 1.5zm9.333 1.5a.75.75 0 0 0 0-1.5zm-9.333-9.5a.75.75 0 0 0 0 1.5zm9.333 1.5a.75.75 0 0 0 0-1.5zm-11.667 4h14v-1.5h-14zm2.334 4h9.333v-1.5H7.834zm0-8h9.333v-1.5H7.834z"
    />
  </svg>
);
export default SvgHamburger;
