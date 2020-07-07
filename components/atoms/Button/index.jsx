import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

import { TEXT_S, TEXT_M, TEXT_L } from "../../../public/font";

export const ButtonFontSize = {
  S: TEXT_S,
  M: TEXT_M,
  L: TEXT_L,
};

const Button = ({
  children,
  width = "60px",
  height = "30px",
  fontSize = ButtonFontSize.M,
  marginBottom = "0px",
  onClick,
}) => {
  return (
    <Styled.Button
      width={width}
      height={height}
      fontSize={fontSize}
      marginBottom={marginBottom}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};

Button.prototype = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  width: propTypes.string,
  height: propTypes.string,
  fontSize: propTypes.string,
  marginBottom: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
