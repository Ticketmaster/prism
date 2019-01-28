import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const GetHelpIcon = ({ children, color, ...props }) => (
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
        <rect id="bounds" x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M9.14644661,18.1464466 C9.2402148,18.0526784 9.36739176,18 9.5,18 L19.5,18 C21.4332224,18 23,16.4334929 23,14.5 L23,4.5 C23,2.56714237 21.4328576,1 19.5,1 L4.5,1 C2.56714237,1 1,2.56714237 1,4.5 L1,14.5 C1,16.4334929 2.56677762,18 4.5,18 C4.77614237,18 5,18.2238576 5,18.5 L5,22.2928932 L9.14644661,18.1464466 Z M9.70710678,19 L4.85355339,23.8535534 C4.53857096,24.1685358 4,23.9454524 4,23.5 L4,18.9725462 C1.74987944,18.7239 0,16.8167868 0,14.5 L0,4.5 C0,2.01485763 2.01485763,0 4.5,0 L19.5,0 C21.9851424,0 24,2.01485763 24,4.5 L24,14.5 C24,16.9858163 21.9854685,19 19.5,19 L9.70710678,19 Z M12,14 C12.275,14 12.5,14.224 12.5,14.5 C12.5,14.775 12.275,15 12,15 C11.723,15 11.5,14.775 11.5,14.5 C11.5,14.224 11.723,14 12,14 Z M12.5,10.897369 L12.5,12.5 C12.5,12.7761424 12.2761424,13 12,13 C11.7238576,13 11.5,12.7761424 11.5,12.5 L11.5,10.5555556 C11.5,10.3468658 11.6296137,10.1601249 11.8251229,10.0871348 C13.558936,9.43984457 14,8.91056781 14,7.83333333 C14,6.79166667 13.2460317,6 12,6 C10.7539683,6 10,6.79166667 10,7.83333333 C10,8.10947571 9.77614237,8.33333333 9.5,8.33333333 C9.22385763,8.33333333 9,8.10947571 9,7.83333333 C9,6.25 10.1904762,5 12,5 C13.8095238,5 15,6.25 15,7.83333333 C15,9.28508611 14.3476069,10.1456847 12.5,10.897369 Z"
          id="Combined-Shape"
        />
        <g id="question-mark" transform="translate(9.000000, 5.000000)" />
      </g>
    </g>
  </svg>
);

GetHelpIcon.displayName = "GetHelpIcon";

GetHelpIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

GetHelpIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default GetHelpIcon;
