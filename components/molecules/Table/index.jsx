import React, { useCallback } from "react";
import Router from "next/router";
import propTypes from "prop-types";

import * as Styled from "./style";
import Tr from "../Tr";
import Th from "../Th";
import Td, { TextAlign } from "../Td";
import { LOAD_POST_REQUEST } from "../../../reducers/post";
import { useDispatch } from "react-redux";

const Table = ({ headData, bodyData, hover = false }) => {
  const dispatch = useDispatch();
  const onClickPost = useCallback((postId) => {
    window.scrollTo(0, 0);
    dispatch({ type: LOAD_POST_REQUEST, postId: postId });
    Router.push(`/BoardPage/board?postId=${postId}`);
  }, []);

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
        <Td textAlign={TextAlign.LEFT} onClick={() => onClickPost(data.id)}>
          {data.title}
        </Td>
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
