import React from "react";
import PropTypes from "prop-types";

const Transportation = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        d="M20 12.21c0 .11-.038.203-.113.278a.406.406 0 0 1-.278.121 1.988 1.988 0 0 1 .39 1.188c.001.276-.051.535-.155.777a2.02 2.02 0 0 1-1.067 1.067 1.946 1.946 0 0 1-.777.156 1.968 1.968 0 0 1-1.203-.399 2.048 2.048 0 0 1-.438-.449 1.796 1.796 0 0 1-.273-.574 1.416 1.416 0 0 0-.063.281.404.404 0 0 1-.132.246.385.385 0 0 1-.266.098h-4.852a.389.389 0 0 1-.261-.098.397.397 0 0 1-.137-.246 2.247 2.247 0 0 0-.11-.453 2.463 2.463 0 0 1-.867 1.145A2.372 2.372 0 0 1 8 15.797a2.368 2.368 0 0 1-1.398-.45 2.463 2.463 0 0 1-.868-1.144 2.188 2.188 0 0 0-.109.453.397.397 0 0 1-.137.246.389.389 0 0 1-.261.098h-.829A.4.4 0 0 1 4 14.602c0-.391.022-.762.066-1.114.045-.351.11-.682.196-.992a5.33 5.33 0 0 1 .32-.867c.128-.268.277-.514.45-.738.098-.12.201-.235.308-.344.107-.11.217-.211.332-.305.052-.104.138-.264.258-.48a5.23 5.23 0 0 1 .484-.707 5.71 5.71 0 0 1 .582-.617 5.32 5.32 0 0 1 .645-.504c.224-.149.458-.278.703-.387.245-.11.497-.195.758-.258a8.926 8.926 0 0 1 1.37-.223c.498-.044.985-.063 1.462-.058.476.005.912.034 1.308.086.396.052.7.122.914.21.12.053.281.178.485.376.203.198.46.59.773 1.18.099.187.188.367.266.538.078.172.143.313.195.422 1.344.104 2.18.192 2.508.262.328.07.526.124.594.16.24.12.427.278.562.473.135.195.237.393.305.594.067.2.11.382.129.546.018.165.027.273.027.325v.03zM9.297 8.063a3.922 3.922 0 0 0-.738.266 4.109 4.109 0 0 0-1.13.797c-.15.151-.286.3-.406.445.214-.057.434-.1.66-.129a5.7 5.7 0 0 1 .715-.043h.016l.43.02 1.11.05a302.26 302.26 0 0 1 3.367.18 778.146 778.146 0 0 0 1.64.11 5.566 5.566 0 0 0-.121-.258l-.137-.273c-.27-.516-.478-.84-.621-.973a2.152 2.152 0 0 0-.238-.207c-.157-.068-.41-.123-.758-.164-.349-.042-.74-.065-1.176-.07a13.94 13.94 0 0 0-1.344.05c-.46.04-.884.106-1.27.2zM8 15a1.609 1.609 0 0 0 1.477-.977 1.558 1.558 0 0 0 .109-.82 2.458 2.458 0 0 0-.727-.441 2.322 2.322 0 0 0-.859-.16c-.302 0-.589.053-.86.16-.27.106-.512.254-.726.441a1.114 1.114 0 0 0-.016.195c0 .224.042.433.125.625a1.62 1.62 0 0 0 .856.852c.195.083.402.125.621.125zm7.305-.797c.078-.312.202-.605.37-.879a3.2 3.2 0 0 1 .622-.73c.057-.052.117-.103.18-.153a2.02 2.02 0 0 1 .195-.136l.004-.004c.002-.003.006-.004.012-.004a3.02 3.02 0 0 1 .699-.332c.247-.08.501-.132.761-.152h.016a1.486 1.486 0 0 1 .234-.016h.75a2.09 2.09 0 0 0-.168-.469.773.773 0 0 0-.355-.367 1.448 1.448 0 0 0-.254-.066 10.63 10.63 0 0 0-.781-.11c-.383-.044-.92-.095-1.61-.152a176.163 176.163 0 0 0-4.48-.285 347.95 347.95 0 0 0-3.11-.145c-.692 0-1.265.119-1.718.356a2.992 2.992 0 0 0-1.082.925 3.71 3.71 0 0 0-.574 1.286 7.972 7.972 0 0 0-.211 1.433h.093c.073-.276.18-.538.32-.785a3.16 3.16 0 0 1 .516-.676.122.122 0 0 1 .024-.031c.01-.01.023-.02.039-.031l.047-.047a.209.209 0 0 1 .054-.04 3.11 3.11 0 0 1 .977-.59 3.152 3.152 0 0 1 2.25 0c.365.139.69.336.977.59.026.016.049.035.07.055l.066.067c.003.002.007.004.012.004.203.208.378.437.523.687.146.25.256.516.329.797h4.203zM18 15c.328 0 .61-.117.848-.352.237-.234.355-.518.355-.851 0-.297-.098-.557-.293-.781a1.193 1.193 0 0 0-.73-.407c-.193.021-.377.062-.551.121-.175.06-.34.14-.496.239-.11.11-.193.235-.25.379a1.198 1.198 0 0 0-.086.449c0 .333.117.617.351.851.235.235.519.352.852.352z"
      />
    </g>
  </svg>
);

Transportation.displayName = "TransportationIcon";

Transportation.defaultProps = {
  color: "currentColor",
  children: null
};

Transportation.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Transportation;
