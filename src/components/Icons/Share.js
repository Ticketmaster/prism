import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const ShareIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <polygon
          id="bounds"
          transform="translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) "
          points="24 0 0 0 0 24 24 24"
        />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M3.08942708,17.1410498 C5.75641082,14.5548838 9.20630916,13 13.5,13 C13.7761424,13 14,13.2238576 14,13.5 L14,17.4187798 L22.6992374,10.024428 L14,3.5 L14,7.5 C14,7.77614237 13.7761424,8 13.5,8 C8.23779504,8 4.79391614,10.5046392 2.76288434,14.7171496 C2.07583933,16.1421318 1.60152459,17.6693506 1.30336586,19.2015439 C1.81409167,18.4968824 2.40798256,17.8018445 3.08942708,17.1410498 Z M3.78557292,17.8589502 C2.91299689,18.7050845 2.19301391,19.6121497 1.61732416,20.5181532 C1.41661014,20.834031 1.24857921,21.1265033 1.11213185,21.3877358 C1.03189816,21.5413456 0.980926507,21.6481858 0.958078667,21.7004094 C0.736989732,22.2057556 -0.019368632,22.033396 0.000318572826,21.4821542 C0.00459102746,21.3625255 0.0187071919,21.1469332 0.0483547723,20.848937 C0.0972918252,20.3570569 0.173165888,19.8101626 0.281738373,19.2217698 C0.59202891,17.5401953 1.10274089,15.8578499 1.86211566,14.2828504 C3.98494358,9.87994806 7.60216711,7.16443793 13,7.00722111 L13,2.5 C13,2.08797734 13.4703819,1.8527864 13.8,2.1 L23.8,9.6 C24.0565773,9.79243299 24.0681946,10.1732548 23.8238242,10.3809697 L13.8238242,18.8809697 C13.4990813,19.1570012 13,18.9262058 13,18.5 L13,14.007549 C9.21423571,14.1225778 6.17072631,15.5460742 3.78557292,17.8589502 Z"
        />
      </g>
    </g>
  </svg>
);

ShareIcon.displayName = "ShareIcon";

ShareIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

ShareIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default ShareIcon;
