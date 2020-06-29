import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Span, { SpanSize, SpanWeight, SpanType } from "../../atoms/Span";
import { CalculateBox } from "../../../utils";

export const TextAlign = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
};

const Td = ({ children, textAlign = TextAlign.CENTER, pad = [0] }) => {
  const padding = CalculateBox(pad);

  return (
    <Styled.Td textAlign={textAlign} padding={padding}>
      <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
        {children}
      </Span>
    </Styled.Td>
  );
};

Td.propTypes = {
  children: propTypes.node.isRequired,
};

export default Td;
