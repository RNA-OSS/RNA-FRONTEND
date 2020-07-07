import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { BLACK, LIGHT_GRAY, MAIN_COLOR } from "../../../public/color";
import { CalculateBox } from "../../../utils";

export const BorderColor = {
  black: BLACK,
  gray: LIGHT_GRAY,
  main: MAIN_COLOR,
};

const Border = ({
  width = "100%",
  height = "1px",
  color = BorderColor.gray,
  mar = ["0"],
}) => {
  const margin = CalculateBox(mar);
  return (
    <Styled.Border
      width={width}
      height={height}
      color={color}
      margin={margin}
    />
  );
};

Border.propTypes = {};

export default Border;
