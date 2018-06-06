import React from "react";
import PropTypes from "prop-types";

const VenueIcon = ({ size, color, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(1 .85)">
      <circle cx="12" cy="12.15" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        d="M15.602 9.398a1.16 1.16 0 0 1-.852-.351 1.15 1.15 0 0 1-.352-.844c0-.333.118-.617.352-.851A1.16 1.16 0 0 1 15.602 7c.328 0 .609.117.843.352.235.234.352.518.352.851 0 .328-.117.61-.352.844a1.15 1.15 0 0 1-.843.351zm0-1.601c-.11 0-.204.039-.282.117a.393.393 0 0 0-.117.29c0 .109.04.202.117.28a.384.384 0 0 0 .282.118c.109 0 .203-.04.28-.118a.384.384 0 0 0 .118-.28c0-.115-.04-.212-.117-.29a.384.384 0 0 0-.281-.117zm0 6.406a.417.417 0 0 1-.305-.14 22.005 22.005 0 0 1-.406-.516c-.256-.328-.534-.76-.836-1.297-.209-.365-.39-.723-.547-1.074a9.25 9.25 0 0 1-.39-1.035 7.811 7.811 0 0 1-.24-.993 5.657 5.657 0 0 1-.081-.945c0-.39.074-.755.223-1.094.148-.338.348-.634.601-.886.253-.253.55-.453.89-.602a2.702 2.702 0 0 1 1.09-.223c.386 0 .748.075 1.086.223.339.149.636.35.891.602s.456.548.602.886c.146.339.218.703.218 1.094 0 .307-.026.623-.078.945-.052.323-.13.654-.234.993a9.25 9.25 0 0 1-.39 1.035c-.157.351-.34.71-.548 1.074-.307.536-.588.969-.843 1.297-.256.328-.388.5-.399.515a.538.538 0 0 1-.14.102.362.362 0 0 1-.164.04zm0-8c-.276 0-.536.052-.778.156a2.054 2.054 0 0 0-.636.426 1.974 1.974 0 0 0-.586 1.418c0 .505.074 1.01.222 1.512.149.502.328.972.54 1.41.21.438.43.832.66 1.184.229.351.421.631.578.84.156-.209.347-.489.574-.84.226-.352.445-.748.656-1.188.211-.44.392-.91.543-1.41a5.19 5.19 0 0 0 .227-1.508 1.974 1.974 0 0 0-.586-1.418 2.054 2.054 0 0 0-.637-.426 1.946 1.946 0 0 0-.777-.156zm3.195-2.406c.333 0 .617.117.851.351.235.235.352.519.352.852v13.602c0 .328-.117.609-.352.843a1.16 1.16 0 0 1-.851.352H5.203a1.16 1.16 0 0 1-.851-.352A1.15 1.15 0 0 1 4 18.602V5c0-.333.117-.617.352-.852a1.16 1.16 0 0 1 .851-.351h13.594zM9.203 18.203c.11 0 .203.04.281.117a.384.384 0 0 1 .118.282V19h1.601V4.602H9.602V5c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.117.393.393 0 0 1-.29-.117A.384.384 0 0 1 8.797 5v-.398H7.203V19h1.594v-.398c0-.11.039-.204.117-.282a.393.393 0 0 1 .29-.117zm-2.805-1.601v-.805H4.797v.805h1.601zM12 15.797v.805h7.203v-.805H12zM19.203 5c0-.11-.039-.203-.117-.281a.393.393 0 0 0-.29-.117H12V15h7.203V5zm-14-.398c-.114 0-.21.039-.289.117A.384.384 0 0 0 4.797 5v10h1.601V4.602H5.203zm-.406 14c0 .109.039.203.117.28a.393.393 0 0 0 .29.118h1.194v-1.602H4.797v1.204zm14 .398c.114 0 .21-.04.289-.117a.384.384 0 0 0 .117-.281v-1.204H12V19h6.797zM9.203 7.797a.393.393 0 0 1-.289-.117.384.384 0 0 1-.117-.282v-.796c0-.11.039-.204.117-.282a.393.393 0 0 1 .29-.117c.109 0 .202.04.28.117a.384.384 0 0 1 .118.282v.796c0 .11-.04.204-.118.282a.384.384 0 0 1-.28.117zm0 2.406a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29V9c0-.11.039-.203.117-.281a.393.393 0 0 1 .29-.117c.109 0 .202.039.28.117A.384.384 0 0 1 9.602 9v.797c0 .114-.04.21-.118.289a.384.384 0 0 1-.28.117zm0 2.399a.393.393 0 0 1-.289-.118.384.384 0 0 1-.117-.28v-.806c0-.109.039-.203.117-.28a.393.393 0 0 1 .29-.118c.109 0 .202.04.28.117a.384.384 0 0 1 .118.281v.805c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.118zm0 2.398a.393.393 0 0 1-.289-.117.384.384 0 0 1-.117-.281v-.805c0-.11.039-.203.117-.281a.393.393 0 0 1 .29-.118c.109 0 .202.04.28.118a.384.384 0 0 1 .118.28v.806c0 .109-.04.203-.118.28a.384.384 0 0 1-.28.118zm.399 1.203V17c0 .11-.04.203-.118.281a.384.384 0 0 1-.28.117.393.393 0 0 1-.29-.117.384.384 0 0 1-.117-.281v-.797c0-.114.039-.21.117-.289a.393.393 0 0 1 .29-.117c.109 0 .202.039.28.117a.393.393 0 0 1 .118.29z"
      />
    </g>
  </svg>
);

VenueIcon.displayName = "VenueIcon";

VenueIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default VenueIcon;
