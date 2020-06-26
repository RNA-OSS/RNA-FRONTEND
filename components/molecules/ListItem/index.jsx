import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateSort, CalculateBox } from "../../../utils";

export const ItemDirection = {
  ROW: "row",
  COL: "column",
};

export const ItemSelfSort = {
  START: "flex-start",
  CENTER: "center",
  END: "flex-end",
};

export const ItemSort = {
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

const ListItem = ({
  children,
  direction = ItemDirection.ROW,
  sort = ItemSort.CENTER_CENTER,
  self = "auto",
  mar = [0],
  pad = [0],
  width = "auto",
  height = "auto",
}) => {
  const [horizontal, vertical] = CalculateSort(sort);
  const justifyContent =
    direction === ItemDirection.ROW ? horizontal : vertical;
  const alignItems = direction === ItemDirection.ROW ? vertical : horizontal;
  const margin = CalculateBox(mar);
  const padding = CalculateBox(pad);

  return (
    <Styled.ListItem
      direction={direction}
      self={self}
      justify={justifyContent}
      align={alignItems}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
    >
      {children}
    </Styled.ListItem>
  );
};

ListItem.prototype = {
  children: propTypes.node.isRequired,
  direction: propTypes.string,
  sort: propTypes.number,
  self: propTypes.string,
  mar: propTypes.array,
  pad: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
};

export default ListItem;
