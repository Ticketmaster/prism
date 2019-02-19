import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";
import { themes } from "../../theme";

const errorIcons = {
  outline: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h18v19H0z" />
          <path
            fill={color}
            d="M16.822 9.697a.274.274 0 0 0 0-.373l-7.636-8.06a.24.24 0 0 0-.353 0l-7.635 8.06a.274.274 0 0 0 0 .373l7.663 8.06a.24.24 0 0 0 .353-.001l7.608-8.059zm-6.81 8.897a1.324 1.324 0 0 1-1.945.004l-7.663-8.06a1.51 1.51 0 0 1-.001-2.054L8.037.425a1.324 1.324 0 0 1 1.945 0l7.635 8.06a1.51 1.51 0 0 1 .002 2.05l-7.608 8.059zm-1.002-3.74c.466 0 .843-.399.843-.89 0-.492-.377-.891-.843-.891-.466 0-.844.399-.844.89 0 .492.378.891.844.891zm0-2.969a.844.844 0 0 0 .843-.843V5.604a.844.844 0 0 0-1.688 0l.001 5.438c0 .466.378.843.844.843z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M22.585 12.969a.333.333 0 0 0 0-.471l-10.35-10.35a.333.333 0 0 0-.471 0L1.415 12.497a.333.333 0 0 0 0 .471l10.387 10.35c.13.13.341.13.471-.001l10.312-10.348zm-9.603 11.054a1.333 1.333 0 0 1-1.886.003L.71 13.676a1.334 1.334 0 0 1-.002-1.886L11.057 1.44c.52-.52 1.365-.52 1.885 0l10.35 10.35c.52.52.52 1.362.001 1.883L12.982 24.023zM12 19.733a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        viewBox="0 0 36 37"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M33.878 19.086a.5.5 0 0 0-.001-.706L18.353 2.856a.5.5 0 0 0-.707 0L2.123 18.379a.5.5 0 0 0 0 .707l15.58 15.524a.5.5 0 0 0 .707 0l15.468-15.524zm-14.76 16.229a1.5 1.5 0 0 1-2.12.004L1.417 19.795a1.5 1.5 0 0 1-.002-2.123L16.939 2.149a1.5 1.5 0 0 1 2.121 0l15.524 15.524a1.5 1.5 0 0 1 .002 2.12L19.118 35.314zM18 28.733a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-6a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 1 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
          />
        </g>
      </svg>
    )
  },
  filled: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill={color}
            d="M8.34056192,15.3697458 L15.3708695,8.31426719 C15.5439065,8.14061062 15.5436555,7.85963698 15.3703084,7.68628991 L8.31370757,0.629690129 C8.14014122,0.456123805 7.8587346,0.456123805 7.68516825,0.629690129 L0.629688686,7.68516868 C0.456122323,7.85873502 0.456122304,8.14014168 0.629688645,8.31370804 C0.629875197,8.31389459 0.630061915,8.31408098 0.630248799,8.3142672 L7.71202357,15.370869 C7.88589872,15.544126 8.16730493,15.5436249 8.34056193,15.3697497 C8.34056258,15.3697491 8.34056323,15.3697484 8.34056389,15.3697477 Z"
          />
          <ellipse
            fill="#FFFFFF"
            cx="7.99977025"
            cy="11.7877222"
            rx="1"
            ry="1"
          />
          <path
            d="M7.99977025,9.78245717 L7.99977025,9.78245717 C8.36892936,9.78245717 8.66819195,9.48319458 8.66819195,9.11403547 L8.66819195,4.65789107 C8.66819195,4.28873196 8.36892936,3.98946936 7.99977025,3.98946936 L7.99977025,3.98946936 C7.63061113,3.98946936 7.33134854,4.28873196 7.33134854,4.65789107 L7.33134854,9.11403547 C7.33134854,9.48319458 7.63061113,9.78245717 7.99977025,9.78245717 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill={color}
            d="M12.5099477,22.7984661 L22.8001703,12.4714008 C23.0597259,12.210916 23.0593493,11.7894555 22.7993286,11.5294349 L12.4705801,1.20068785 C12.2102306,0.94033836 11.7881206,0.94033836 11.5277711,1.20068785 L1.2007044,11.5277531 C0.940354857,11.7881026 0.940354829,12.2102126 1.20070434,12.4705621 C1.20098417,12.4708419 1.20126424,12.4711215 1.20154457,12.4714008 L11.5671402,22.8001509 C11.8279529,23.0600364 12.2500623,23.0592847 12.5099478,22.798472 C12.5099487,22.798471 12.5099497,22.79847 12.5099507,22.7984691 Z"
          />
          <ellipse
            fill="#FFFFFF"
            cx="11.999663"
            cy="17.5553259"
            rx="1"
            ry="1"
          />
          <path
            d="M11.999663,14.6142705 L11.999663,14.6142705 C12.5410964,14.6142705 12.9800149,14.175352 12.9800149,13.6339187 L12.9800149,7.09824024 C12.9800149,6.55680687 12.5410964,6.1178884 11.999663,6.1178884 L11.999663,6.1178884 C11.4582297,6.1178884 11.0193112,6.55680687 11.0193112,7.09824024 L11.0193112,13.6339187 C11.0193112,14.175352 11.4582297,14.6142705 11.999663,14.6142705 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        viewBox="0 0 36 37"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill={color}
            d="M18.7666212,35.2693392 L34.5395771,19.4399097 C34.9289104,19.0491824 34.9283455,18.4169918 34.5383146,18.0269608 L18.706361,2.1950086 C18.3158367,1.80448435 17.6826717,1.80448435 17.2921475,2.1950086 L1.46271661,18.0244381 C1.07219231,18.4149624 1.07219228,19.0481273 1.46271656,19.4386516 C1.46313629,19.4390714 1.46355639,19.4394907 1.46397687,19.4399097 L17.3524099,35.2718665 C17.743629,35.6616947 18.376793,35.6605672 18.7666213,35.2693481 C18.7666227,35.2693467 18.7666242,35.2693452 18.7666257,35.2693437 Z"
          />
          <circle fill="#FFFFFF" cx="18" cy="27.2328071" r="1.5" />
          <path
            d="M18,22.7328071 L18,22.7328071 C18.8284271,22.7328071 19.5,22.0612343 19.5,21.2328071 L19.5,11.2328071 C19.5,10.40438 18.8284271,9.73280715 18,9.73280715 L18,9.73280715 C17.1715729,9.73280715 16.5,10.40438 16.5,11.2328071 L16.5,21.2328071 C16.5,22.0612343 17.1715729,22.7328071 18,22.7328071 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    )
  }
};

const ErrorIcon = ({ type, size, children, ...props }) =>
  errorIcons[type][size](themes.global.error.base, children, props);

ErrorIcon.displayName = "ErrorIcon";

ErrorIcon.defaultProps = {
  size: allSizes[0],
  type: types[0],
  children: null
};

ErrorIcon.propTypes = {
  size: PropTypes.oneOf(allSizes),
  type: PropTypes.oneOf(types),
  children: PropTypes.node
};

export default ErrorIcon;