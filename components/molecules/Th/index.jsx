import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { CalculateBox } from "../../../utils";

import Span, { SpanSize, SpanType, SpanWeight } from "../../atoms/Span";

const Th = ({ children, pad = [0], width }) => {
  const padding = CalculateBox(pad);
  return (
    <Styled.Th padding={padding} width={width}>
      <Span size={SpanSize.s} weight={SpanWeight.l} type={SpanType.gray}>
        {children}
      </Span>
    </Styled.Th>
  );
};

Th.prototype = {
  children: propTypes.node.isRequired,
};

export default Th;
