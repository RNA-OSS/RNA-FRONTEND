import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateBox } from "../../../utils";

import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";

const Th = ({ children, pad = [0], width }) => {
  const padding = CalculateBox(pad);
  return (
    <Styled.Th padding={padding} width={width}>
      <Span size={SpanSize.S} weight={SpanWeight.L} type={SpanColor.GRAY}>
        {children}
      </Span>
    </Styled.Th>
  );
};

Th.prototype = {
  children: propTypes.node.isRequired,
  width: propTypes.string,
  pad: propTypes.array,
};

export default Th;
