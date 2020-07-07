import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Tr from "../Tr";
import Th from "../Th";
import Td, { TextAlign } from "../Td";

const Table = ({ headData, bodyData, hover = false }) => {
  let renderTableHeadData = () =>
    headData.map((data, i) => (
      <Th key={i} pad={[2, 0]} width={data.width}>
        {data.name}
      </Th>
    ));

  let renderTableBodyData = () =>
    bodyData.map((data) => (
      <Tr key={data.id} bordered={true}>
        <Td pad={[1, 0]}>{data.id}</Td>
        <Td textAlign={TextAlign.LEFT}>{data.title}</Td>
        <Td>{data.user}</Td>
        <Td>{data.date}</Td>
      </Tr>
    ));

  return (
    <Styled.Table hover={hover}>
      <thead>
        <Tr>{renderTableHeadData()}</Tr>
      </thead>
      <tbody>{renderTableBodyData()}</tbody>
    </Styled.Table>
  );
};

Table.prototype = {
  headData: propTypes.array,
  bodyData: propTypes.array,
  hover: propTypes.bool,
};

export default Table;
