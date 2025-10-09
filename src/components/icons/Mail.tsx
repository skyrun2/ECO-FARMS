import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -4 32 32"
    width="1em"
    height="1em"
    className="w-6 h-6"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30 20c0 .203-.039.395-.095.578L21 11l9-7zM3.556 21.946l9.024-9.616L16 14.915l3.272-2.601 9.172 9.632c-.143.033-24.745.033-24.888 0M2 20V4l9 7-8.905 9.578A2 2 0 0 1 2 20M29 2 16 12 3 2zm-1-2H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4"
    />
  </svg>
);
export default SvgMail;
