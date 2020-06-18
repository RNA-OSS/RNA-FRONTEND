import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";
import { TEXT_S, TEXT_M, TEXT_L } from "../../../public/font";
import { BLACK, MAIN_COLOR, DARK_GRAY, WARNING } from "../../../public/color";

export const PType = {
  normal: BLACK,
  primary: MAIN_COLOR,
  gray: DARK_GRAY,
  warn: WARNING,
};

export const PSize = {
  s: TEXT_S,
  m: TEXT_M,
  l: TEXT_L,
};

export const PWeight = {
  xs: 100,
  s: 300,
  m: 500,
  l: 700,
};

const P = ({
  children = "",
  size = PSize.m,
  weight = PWeight.m,
  type = PType.normal,
  marginBottom = "0px",
}) => {
  return (
    <Styled.P
      size={size}
      weight={weight}
      type={type}
      marginBottom={marginBottom}
    >
      {children}
    </Styled.P>
  );
};

P.propTypes = {
  children: propTypes.string,
  size: propTypes.string,
  weight: propTypes.number,
  type: propTypes.string,
  marginBottom: propTypes.string,
};

export default P;