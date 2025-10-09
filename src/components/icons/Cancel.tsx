import * as React from "react";
import type { SVGProps } from "react";
const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    className="w-6 h-6"
    {...props}
  >
    <g id="cancel_svg__SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".cancel_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <g id="cancel_svg__cross">
        <path d="m7 7 18 18M7 25 25 7" className="cancel_svg__cls-1" />
      </g>
    </g>
  </svg>
);
export default SvgCancel;
