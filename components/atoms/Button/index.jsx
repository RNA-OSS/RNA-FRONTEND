import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

import { TEXT_S, TEXT_M, TEXT_L } from "../../../public/font";
import {
  WHITE,
  MAIN_COLOR,
  LIGHT_MAIN_COLOR,
  DARK_GRAY,
} from "../../../public/color";
import { CalculateBox } from "../../../utils";

export const ButtonFontSize = {
  S: TEXT_S,
  M: TEXT_M,
  L: TEXT_L,
};

export const ButtonColor = {
  MAIN: MAIN_COLOR,
  LIGHT_MAIN: LIGHT_MAIN_COLOR,
  WHITE: WHITE,
  GRAY: DARK_GRAY,
};

const Button = ({
  children,
  width = "60px",
  height = "30px",
  fontSize = ButtonFontSize.M,
  fontColor = ButtonColor.WHITE,
  backgroundColor = ButtonColor.MAIN,
  mar = [0],
  shadow = false,
  hover = false,
  onClick,
}) => {
  const margin = CalculateBox(mar);

  return (
    <Styled.Button
      width={width}
      height={height}
      fontSize={fontSize}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      shadow={shadow}
      hover={hover}
      margin={margin}
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
  mar: propTypes.array,
  onClick: propTypes.func,
};

export default Button;
