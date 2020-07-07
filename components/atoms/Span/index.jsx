import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import {
  WEIGHT_S,
  WEIGHT_M,
  WEIGHT_L,
  WEIGHT_XL,
  TEXT_S,
  TEXT_M,
  TEXT_L,
} from "../../../public/font";
import { BLACK, MAIN_COLOR, DARK_GRAY, WARNING } from "../../../public/color";
import { CalculateBox } from "../../../utils";

export const SpanColor = {
  BLACK: BLACK,
  MAIN: MAIN_COLOR,
  GRAY: DARK_GRAY,
  WARNING: WARNING,
};

export const SpanSize = {
  S: TEXT_S,
  M: TEXT_M,
  L: TEXT_L,
};

export const SpanWeight = {
  S: WEIGHT_S,
  M: WEIGHT_M,
  L: WEIGHT_L,
  XL: WEIGHT_XL,
};

const Span = ({
  children = "",
  size = SpanSize.M,
  weight = SpanWeight.M,
  color = SpanColor.BLACK,
  mar = [0],
}) => {
  const margin = CalculateBox(mar);

  return (
    <Styled.Span size={size} weight={weight} color={color} margin={margin}>
      {children}
    </Styled.Span>
  );
};

Span.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string,
  weight: propTypes.number,
  color: propTypes.string,
  mar: propTypes.array,
};

export default Span;
