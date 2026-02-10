const ConnectingLineGraphic = ({ className, onMouseEnter, onMouseLeave }: { className?: string, onMouseEnter?: () => void, onMouseLeave?: () => void }) => (
  <svg
    width={168}
    height={98}
    viewBox="0 0 168 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path
      d="M21.75 0.499996L21.75 46.9999L50.25 46.9999M21.75 0.499996L0 0.499996M21.75 0.499996L75.5 0.499996M114 46.9999L50.25 46.9999M50.25 46.9999L50.25 96.9999L168 96.9999"
      stroke="url(#paint0_linear_1_30)"
      strokeDasharray="4 4"
      style={{ height: "calc((98/16) * 1px)" }}
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_30"
        x1={-7.00001}
        y1={28.5}
        x2={57.5}
        y2={49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D1E9FF" />
        <stop offset={1} stopColor="#2E90FA" />
      </linearGradient>
    </defs>
  </svg>
);
export default ConnectingLineGraphic;
