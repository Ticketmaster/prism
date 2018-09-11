import React from "react";
import { PropTypes } from "prop-types";
import * as sizes from "./iconSizes";
import { themes } from "../../theme";

const infoIcons = {
  small: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path
          fill={themes.global.primary.base}
          d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
        />
      </g>
    </svg>
  ),
  regular: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill={themes.global.primary.base}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
        />
      </g>
    </svg>
  ),
  large: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h36v36H0z" />
        <path
          fill={themes.global.primary.base}
          d="M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm0-24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11A1.5 1.5 0 0 0 18 28z"
        />
      </g>
    </svg>
  )
};

const InfoIcon = ({ size, children, ...props }) =>
  infoIcons[size](children, props);

InfoIcon.displayName = "InfoIcon";

InfoIcon.defaultProps = {
  size: sizes.all[0],
  children: null
};

InfoIcon.propTypes = {
  size: PropTypes.oneOf(sizes.all),
  children: PropTypes.node
};

export default InfoIcon;
