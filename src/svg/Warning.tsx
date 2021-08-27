import { IconProps } from './types'

const Warning: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="240"
      viewBox="0 0 240 240"
      {...props}
    >
      <defs>
        <linearGradient
          id="ycq2442koa"
          x1="-.319"
          x2=".625"
          y1="-1.129"
          y2=".389"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#4c6ee8" />
          <stop offset="1" stopColor="#4c6ee8" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="a6uxmgdjzb"
          x1=".121"
          x2=".84"
          y2=".859"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#183bb9" />
          <stop offset="1" stopColor="#0b1b51" />
        </linearGradient>
      </defs>
      <g transform="translate(-68 -109)">
        <circle
          cx="120"
          cy="120"
          r="120"
          fill="url(#ycq2442koa)"
          opacity="0.511"
          transform="translate(68 109)"
        />
        <g>
          <g>
            <path
              fill="none"
              d="M0 0h153.445v153.445H0z"
              transform="translate(110.64 147.178)"
            />
          </g>
          <g>
            <path
              fill="url(#a6uxmgdjzb)"
              d="M55.148 2L4 21.181v38.936c0 32.287 21.8 62.4 51.148 69.754C84.495 122.518 106.3 92.4 106.3 60.117V21.181zm6.394 89.51H48.755V78.723h12.787zm0-25.574H48.755V33.968h12.787z"
              transform="translate(110.64 147.178) translate(25.574 12.787) translate(-4 -2)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export { Warning }
