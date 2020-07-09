import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const InputStyle = {
  PLAIN: "plain",
  BORDER: "border",
};

const Input = ({
  marginBottom = "0px",
  type = "text",
  value = "",
  onChange,
  onFocus,
  placeholder = "",
  height = "auto",
  style = InputStyle.PLAIN,
}) => {
  return (
    <Styled.Input
      marginBottom={marginBottom}
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      height={height}
      style={style}
    />
  );
};

Input.prototype = {
  marginBottom: propTypes.string,
  type: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  placeholder: propTypes.string,
  height: propTypes.string,
  style: propTypes.string,
};

export default Input;
