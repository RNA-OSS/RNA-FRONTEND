import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const TextArea = ({
  marginBottom = "0px",
  type = "text",
  value = "",
  onChange,
  onFocus,
  placeholder = "",
  height = "auto",
}) => {
  return (
    <Styled.TextArea
      marginBottom={marginBottom}
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      height={height}
    />
  );
};

TextArea.prototype = {
  marginBottom: propTypes.string,
  type: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  placeholder: propTypes.string,
  height: propTypes.string,
};

export default TextArea;
