import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    width="1em"
    height="1em"
    className="w-6 h-6"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={12}
      d="M96 170c40.869 0 74-33.131 74-74s-33.131-74-74-74-74 33.13-74 74 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
    />
  </svg>
);
export default SvgFacebook;
