import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

import { TEXT_S, TEXT_M, TEXT_L } from "../../../public/font";
import { WHITE, MAIN_COLOR, LIGHT_MAIN_COLOR } from "../../../public/color";

export const ButtonFontSize = {
  S: TEXT_S,
  M: TEXT_M,
  L: TEXT_L,
};

export const ButtonColor = {
  MAIN: MAIN_COLOR,
  LIGHT_MAIN: LIGHT_MAIN_COLOR,
  WHITE: WHITE,
};

const Button = ({
  children,
  width = "60px",
  height = "30px",
  fontSize = ButtonFontSize.M,
  fontColor = ButtonColor.WHITE,
  backgroundColor = ButtonColor.MAIN,
  marginBottom = "0px",
  shadow = false,
  hover = false,
  onClick,
}) => {
  return (
    <Styled.Button
      width={width}
      height={height}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      shadow={shadow}
      hover={hover}
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
  fontColor: propTypes.string,
  backgroundColor: propTypes.string,
  shadow: propTypes.bool,
  hover: propTypes.bool,
  marginBottom: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
