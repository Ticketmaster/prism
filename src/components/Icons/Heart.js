import React from "react";
import PropTypes from "prop-types";

const HeartIcon = ({ size, children, opacity, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 51.997 51.997"
    stroke={color}
    fill={color}
    fillOpacity={opacity}
    {...props}
  >
    {children}
    <path
      d="M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
		c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
		c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
		c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
    />
  </svg>
);

HeartIcon.displayName = "HeartIcon";

HeartIcon.defaultProps = {
  children: null,
  color: "currentColor",
  opacity: 1
};

HeartIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  opacity: PropTypes.number
};

export default HeartIcon;
