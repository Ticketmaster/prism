import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const VolumeMuteIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g
      id="FLATTENED"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Artboard" transform="translate(-62.000000, -179.000000)">
        <g
          id="Icons/Actions/Mute-24"
          transform="translate(62.000000, 177.000000)"
        >
          <g>
            <rect id="bounds" x="0" y="0" width="24" height="24" />
            <path
              fill={color}
              {...color !== "currentColor" && { fillOpacity: ".65" }}
              fillRule="nonzero"
              d="M19.2928932,12 L16.1464466,8.85355339 C15.9511845,8.65829124 15.9511845,8.34170876 16.1464466,8.14644661 C16.3417088,7.95118446 16.6582912,7.95118446 16.8535534,8.14644661 L20,11.2928932 L23.1464466,8.14644661 C23.3417088,7.95118446 23.6582912,7.95118446 23.8535534,8.14644661 C24.0488155,8.34170876 24.0488155,8.65829124 23.8535534,8.85355339 L20.7071068,12 L23.8535534,15.1464466 C24.0488155,15.3417088 24.0488155,15.6582912 23.8535534,15.8535534 C23.6582912,16.0488155 23.3417088,16.0488155 23.1464466,15.8535534 L20,12.7071068 L16.8535534,15.8535534 C16.6582912,16.0488155 16.3417088,16.0488155 16.1464466,15.8535534 C15.9511845,15.6582912 15.9511845,15.3417088 16.1464466,15.1464466 L19.2928932,12 Z M12.1464466,2.14644661 C12.461429,1.83146418 13,2.05454757 13,2.5 L13,21.5 C13,21.9454524 12.461429,22.1685358 12.1464466,21.8535534 L7.29289322,17 L2.5,17 C1.11928813,17 2.67064149e-13,15.8807119 2.6567637e-13,14.5 L3.34510197e-13,9.5 C3.34371419e-13,8.11928813 1.11928813,7 2.5,7 L7.29289322,7 L12.1464466,2.14644661 Z M7.85355339,7.85355339 C7.7597852,7.94732158 7.63260824,8 7.5,8 L2.5,8 C1.67157288,8 1,8.67157288 1,9.5 L1,14.5 C1,15.3284271 1.67157288,16 2.5,16 L7.5,16 C7.63260824,16 7.7597852,16.0526784 7.85355339,16.1464466 L12,20.2928932 L12,3.70710678 L7.85355339,7.85355339 Z"
            />
            <g id="Group-8" transform="translate(16.000000, 8.000000)" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

VolumeMuteIcon.displayName = "VolumeMuteIcon";

VolumeMuteIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

VolumeMuteIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default VolumeMuteIcon;
