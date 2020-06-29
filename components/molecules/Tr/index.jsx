import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const Tr = ({ children, bordered = false }) => {
  return <Styled.Tr bordered={bordered}>{children}</Styled.Tr>;
};

Tr.propTypes = {
  children: propTypes.node.isRequired,
};

export default Tr;
