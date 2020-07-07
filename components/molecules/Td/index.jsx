import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";
import { CalculateBox } from "../../../utils";

export const TextAlign = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
};

const Td = ({ children, textAlign = TextAlign.CENTER, pad = [0], onClick }) => {
  const padding = CalculateBox(pad);

  return (
    <Styled.Td textAlign={textAlign} padding={padding} onClick={onClick}>
      <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
        {children}
      </Span>
    </Styled.Td>
  );
};

Td.propTypes = {
  children: propTypes.node.isRequired,
  textAlign: propTypes.string,
  pad: propTypes.array,
  onClick: propTypes.func,
};

export default Td;
