import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateSort, CalculateBox } from "../../../utils";

export const ListDirection = {
  ROW: "row",
  COL: "column",
};

export const ListSort = {
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

const List = ({
  children,
  direction = ListDirection.ROW,
  width = "auto",
  height = "auto",
  sort = ListSort.CENTER_CENTER,
  mar = [0],
  pad = [0],
  card = false,
  shadow = false,
}) => {
  const [horizontal, vertical] = CalculateSort(sort);
  const justifyContent =
    direction === ListDirection.ROW ? horizontal : vertical;
  const alignItems = direction === ListDirection.ROW ? vertical : horizontal;
  const margin = CalculateBox(mar);
  const padding = CalculateBox(pad);

  return (
    <Styled.List
      width={width}
      height={height}
      justify={justifyContent}
      align={alignItems}
      direction={direction}
      padding={padding}
      margin={margin}
      card={card}
      shadow={shadow}
    >
      {children}
    </Styled.List>
  );
};

List.propTypes = {
  children: propTypes.node.isRequired,
  direction: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  sort: propTypes.number,
  mar: propTypes.array,
  pad: propTypes.array,
  card: propTypes.bool,
  shadow: propTypes.bool,
};

export default List;
