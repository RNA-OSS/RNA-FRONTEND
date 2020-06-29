import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import * as Styled from "./style";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Table from "../../molecules/Table";
import { LOAD_POST_LISTS_REQUEST } from "../../../reducers/post";

const HeadData = [
  { name: "번호", width: "auto" },
  { name: "제목", width: "50%" },
  { name: "작성자", width: "auto" },
  { name: "날짜", width: "auto" },
];

const Board = () => {
  const dispatch = useDispatch();
  const { postLists, isLoadedPostLists } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch({ type: LOAD_POST_LISTS_REQUEST });
  }, []);

  return (
    <>
      <Title size={TitleSize.xs} weight={TitleWeight.l} mar={[2, 0, 2, 2]}>
        게시판
      </Title>
      {isLoadedPostLists && (
        <Styled.TableContainer>
          <Table headData={HeadData} bodyData={postLists} />
        </Styled.TableContainer>
      )}
    </>
  );
};

Board.propTypes = {};

export default Board;
