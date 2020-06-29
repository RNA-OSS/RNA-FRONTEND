import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateBox } from "../../../utils";
import {
  WEIGHT_S,
  WEIGHT_M,
  WEIGHT_L,
  WEIGHT_XL,
  TEXT_M,
  TITLE_S,
  TITLE_M,
  TITLE_L,
} from "../../../public/font";
import { BLACK, MAIN_COLOR, DARK_GRAY, WARNING } from "../../../public/color";

export const TitleType = {
  normal: BLACK,
  primary: MAIN_COLOR,
  gray: DARK_GRAY,
  warn: WARNING,
};

export const TitleSize = {
  xs: TEXT_M,
  s: TITLE_S,
  m: TITLE_M,
  l: TITLE_L,
};

export const TitleWeight = {
  s: WEIGHT_S,
  m: WEIGHT_M,
  l: WEIGHT_L,
  xl: WEIGHT_XL,
};

const Title = ({
  children,
  size = TitleSize.s,
  weight = TitleWeight.m,
  type = TitleType.normal,
  mar = [0],
  ellipsis = false,
}) => {
  const margin = CalculateBox(mar);

  return (
    <Styled.Title
      size={size}
      weight={weight}
      type={type}
      margin={margin}
      ellipsis={ellipsis}
    >
      {children}
    </Styled.Title>
  );
};

Title.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string,
  weight: propTypes.number,
  type: propTypes.string,
  margin: propTypes.array,
  ellipsis: propTypes.bool,
};

export default Title;
