import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateBox } from "./../../../utils";

export const BoxDirection = {
  ROW: "row",
  COL: "column",
};

export const BoxSort = {
  TOP_LEFT: 11,
  TOP_CENTER: 12,
  TOP_RIGHT: 13,
  TOP_SPACE_BETWEEN: 14,
  TOP_SPACE_AROUND: 15,
  CENTER_LEFT: 21,
  CENTER_CENTER: 22,
  CENTER_RIGHT: 23,
  CENTER_SPACE_BETWEEN: 24,
  CENTER_SPACE_AROUND: 25,
  BOTTOM_LEFT: 31,
  BOTTOM_CENTER: 32,
  BOTTOM_RIGHT: 33,
  BOTTOM_SPACE_BETWEEN: 34,
  BOTTOM_SPACE_AROUND: 35,
  SPACE_BETWEEN_LEFT: 41,
  SPACE_BETWEEN_CENTER: 42,
  SPACE_BETWEEN_RIGHT: 43,
  SPACE_AROUND_LEFT: 51,
  SPACE_AROUND_CENTER: 52,
  SPACE_AROUND_RIGHT: 53,
};

const CalculateSort = (sort) => {
  const horizontalNumber = sort % 10;
  const verticalNumber = Math.floor(sort / 10);

  let horizontal = "center";
  let vertical = "center";

  if (horizontalNumber === 1) horizontal = "flex-start";
  else if (horizontalNumber === 3) horizontal = "flex-end";
  else if (horizontalNumber === 4) horizontal = "space-between";
  else if (horizontalNumber === 5) horizontal = "space-around";

  if (verticalNumber === 1) vertical = "flex-start";
  else if (verticalNumber === 3) vertical = "flex-end";
  else if (verticalNumber === 4) vertical = "space-between";
  else if (verticalNumber === 5) vertical = "space-around";

  return [horizontal, vertical];
};

const Box = ({
  children,
  direction = BoxDirection.row,
  sort = BoxSort.CENTER_CENTER,
  mar = [0],
  pad = [0],
}) => {
  const [horizontal, vertical] = CalculateSort(sort);

  const justifyContent = direction === BoxDirection.ROW ? horizontal : vertical;
  const alignItems = direction === BoxDirection.ROW ? vertical : horizontal;

  const margin = CalculateBox(mar);
  const padding = CalculateBox(pad);

  return (
    <Styled.Box
      direction={direction}
      justify={justifyContent}
      align={alignItems}
      margin={margin}
      padding={padding}
    >
      {children}
    </Styled.Box>
  );
};

Box.propTypes = {
  children: propTypes.node.isRequired,
};

export default Box;
