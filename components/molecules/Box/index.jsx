import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import {
  CalculateSort,
  CalculateBox,
  CalculateFlexAttribute,
} from "../../../utils";

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

export const BoxWrap = {
  WRAP: "wrap",
  NOWRAP: "nowrap",
};

const Box = ({
  children,
  direction = BoxDirection.ROW,
  sort = BoxSort.CENTER_CENTER,
  mar = [0],
  pad = [0],
  flexAttr = ["auto"],
  width = "100%",
  height = "auto",
  wrap = BoxWrap.NOWRAP,
}) => {
  const [horizontal, vertical] = CalculateSort(sort);

  const justifyContent = direction === BoxDirection.ROW ? horizontal : vertical;
  const alignItems = direction === BoxDirection.ROW ? vertical : horizontal;
  const flex = CalculateFlexAttribute(flexAttr);
  const margin = CalculateBox(mar);
  const padding = CalculateBox(pad);

  return (
    <Styled.Box
      direction={direction}
      justify={justifyContent}
      align={alignItems}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      flex={flex}
      wrap={wrap}
    >
      {children}
    </Styled.Box>
  );
};

Box.propTypes = {
  children: propTypes.node.isRequired,
  direction: propTypes.string,
  sort: propTypes.number,
  mar: propTypes.array,
  pad: propTypes.array,
  flexAttr: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
  wrap: propTypes.string,
};

export default Box;
