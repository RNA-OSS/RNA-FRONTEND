import React from "react";
import propTypes from "prop-types";
import { CalculateBox } from "../../../utils";

import Styled from "./style";

export const ScrollType = {
  HORIZONTAL,
  VERTICAL,
};

export const ViewType = {
  WRAP,
  OVERFLOW,
};

const Scrollable = ({
  children,
  scrollType = ScrollType.HORIZONTAL,
  viewType = ViewType.WRAP,
  mar = [0],
  pad = [0],
}) => {
  const scrollType =
    scrollType === ScrollType.HORIZONTAL ? "overflowX" : "overflowY";
  const viewType = viewType === ViewType.OVERFLOW ? "auto" : "visible";
  const flexWrap = viewType === ViewType.WRAP ? "wrap" : "nowrap";

  return (
    <Styled.Scrollable
      scrollType={scrollType}
      viewType={viewType}
      flexWrap={flexWrap}
      margin={mar}
      padding={pad}
    >
      {children}
    </Styled.Scrollable>
  );
};

export default Scrollable;
