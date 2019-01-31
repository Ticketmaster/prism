import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";
import { themes } from "../../theme";

const alertIcons = {
  outline: {
    small: (color, children, props) => (
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
            fill={color}
            d="M1.968 12.524a.384.384 0 0 0-.055.198.4.4 0 0 0 .405.393h11.364a.415.415 0 0 0 .204-.053.387.387 0 0 0 .146-.538L8.35 3.08a.413.413 0 0 0-.7 0l-5.682 9.444zm-.788-.446L6.86 2.634a1.341 1.341 0 0 1 1.803-.46c.196.111.36.27.474.46l5.682 9.444c.367.61.155 1.392-.474 1.748a1.35 1.35 0 0 1-.664.174H2.318C1.59 14 1 13.428 1 12.722c0-.226.062-.449.18-.644zM8 11.831a.685.685 0 1 0 0-1.37.685.685 0 0 0 0 1.37zm0-2.255a.684.684 0 0 0 .684-.684v-2.17a.684.684 0 1 0-1.369 0v2.17c0 .378.307.684.685.684z"
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
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M2.041 19.13a.612.612 0 0 0-.085.313.63.63 0 0 0 .637.623h18.814a.648.648 0 0 0 .32-.084.615.615 0 0 0 .231-.851L12.551 3.245a.645.645 0 0 0-1.103 0L2.042 19.131zm-.827-.467l9.407-15.886a1.613 1.613 0 0 1 2.757 0l9.407 15.886c.441.744.181 1.697-.58 2.127a1.62 1.62 0 0 1-.798.21H2.593C1.713 21 1 20.303 1 19.443c0-.274.074-.543.214-.78zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1V8.5a1 1 0 0 0-2 0V13a1 1 0 0 0 1 1z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
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
            fill={color}
            d="M2.111 30.88a.957.957 0 0 0-.127.478c0 .535.44.969.983.969h30.066c.17 0 .337-.044.484-.126a.96.96 0 0 0 .371-1.32L18.856 4.754a.992.992 0 0 0-1.711 0L2.11 30.88zm-.855-.477L16.288 4.278a1.983 1.983 0 0 1 3.423 0l15.033 26.125c.536.93.204 2.113-.742 2.64a1.99 1.99 0 0 1-.97.252H2.968C1.881 33.295 1 32.428 1 31.358c0-.335.088-.664.256-.955zM18 29.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-4.908a1.5 1.5 0 0 0 1.5-1.5V13.5a1.5 1.5 0 0 0-3 0v9.592a1.5 1.5 0 0 0 1.5 1.5z"
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
            d="M1.04970329,13.3297652 L7.61714411,2.19495085 C7.7418447,1.98352635 8.01432793,1.91322273 8.22575243,2.03792332 C8.29053904,2.0761352 8.34456808,2.13016424 8.38277997,2.19495085 L14.9502208,13.3297652 C15.0749214,13.5411897 15.0046178,13.8136729 14.7931933,13.9383735 C14.7247876,13.9787199 14.6468206,14 14.5674029,14 L1.43252122,14 C1.18706133,14 0.988076773,13.8010154 0.988076773,13.5555556 C0.988076773,13.4761379 1.00935685,13.3981708 1.04970329,13.3297652 Z"
          />
          <ellipse
            fill="#FFFFFF"
            cx="7.99996204"
            cy="11.6648562"
            rx="1"
            ry="1"
          />
          <path
            d="M7.99996204,9.84863316 L7.99996204,9.84863316 C8.4346242,9.84863316 8.7869875,9.49626986 8.7869875,9.0616077 L8.7869875,6.48429177 C8.7869875,6.04962962 8.4346242,5.69726632 7.99996204,5.69726632 L7.99996204,5.69726632 C7.56529988,5.69726632 7.21293658,6.04962962 7.21293658,6.48429177 L7.21293658,9.0616077 C7.21293658,9.49626986 7.56529988,9.84863316 7.99996204,9.84863316 Z"
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
            d="M1.07417114,19.9968129 L11.4244437,2.29635624 C11.6102988,1.97851724 12.0186236,1.87152316 12.3364626,2.05737827 C12.4353263,2.11518846 12.5176304,2.19749248 12.5754406,2.29635624 L22.9257131,19.9968129 C23.1115683,20.3146519 23.0045742,20.7229766 22.6867352,20.9088318 C22.5846348,20.9685345 22.4684894,21 22.3502147,21 L1.64966956,21 C1.28147973,21 0.983002892,20.7015232 0.983002892,20.3333333 C0.983002892,20.2150587 1.01446838,20.0989132 1.07417114,19.9968129 Z"
          />
          <ellipse
            fill="#FFFFFF"
            cx="11.9999421"
            cy="17.6145298"
            rx="1.04658007"
            ry="1.03620152"
          />
          <path
            d="M11.9999421,14.5237405 L11.9999421,14.5237405 C12.5779523,14.5237405 13.0465222,14.0551706 13.0465222,13.4771604 L13.0465222,8.31690989 C13.0465222,7.73889968 12.5779523,7.27032982 11.9999421,7.27032982 L11.9999421,7.27032982 C11.4219319,7.27032982 10.9533621,7.73889968 10.9533621,8.31690989 L10.9533621,13.4771604 C10.9533621,14.0551706 11.4219319,14.5237405 11.9999421,14.5237405 Z"
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
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill={color}
            d="M1.10716259,31.5039407 L17.1316203,3.45516883 C17.4055863,2.97562625 18.0164257,2.80897351 18.4959683,3.0829395 C18.6510617,3.17154546 18.7795916,3.30007539 18.8681976,3.45516883 L34.8926553,31.5039407 C35.1666213,31.9834833 34.9999685,32.5943226 34.520426,32.8682886 C34.3693473,32.9546009 34.1983625,33 34.0243667,33 L1.97545123,33 C1.42316648,33 0.975451229,32.5522847 0.975451229,32 C0.975451229,31.8260042 1.02085033,31.6550193 1.10716259,31.5039407 Z"
          />
          <ellipse
            fill="#FFFFFF"
            cx="17.9999089"
            cy="28.340301"
            rx="1.56595195"
            ry="1.55323299"
          />
          <path
            d="M17.9999089,24.7160907 L17.9999089,24.7160907 C18.8647603,24.7160907 19.5658609,24.0149901 19.5658609,23.1501388 L19.5658609,12.8206901 C19.5658609,11.9558387 18.8647603,11.2547381 17.9999089,11.2547381 L17.9999089,11.2547381 C17.1350576,11.2547381 16.433957,11.9558387 16.433957,12.8206901 L16.433957,23.1501388 C16.433957,24.0149901 17.1350576,24.7160907 17.9999089,24.7160907 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    )
  }
};

const AlertIcon = ({ type, size, children, ...props }) =>
  alertIcons[type][size](themes.global.caution.base, children, props);

AlertIcon.displayName = "AlertIcon";

AlertIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};

AlertIcon.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(allSizes),
  children: PropTypes.node
};

export default AlertIcon;
