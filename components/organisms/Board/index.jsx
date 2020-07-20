import React, { useState, useEffect, useCallback } from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

import usePost from "../../../hooks/usePost";

import Post from "../Post";
import Loading from "../../atoms/Loading";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Table from "../../molecules/Table";
import Box, { BoxSort } from "../../molecules/Box";
import Span from "../../atoms/Span";
import Button, { ButtonFontSize } from "../../atoms/Button";

const HeadData = [
  { name: "번호", width: "10%" },
  { name: "제목", width: "60%" },
  { name: "작성자", width: "15%" },
  { name: "날짜", width: "15%" },
];

const Board = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const { isLoadedPost, post, postLists, isLoadedPostLists, fetch } = usePost();

  useEffect(() => {
    fetch();
  }, []);

  const onClickMoveIndex = useCallback(
    (index) => {
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const renderPageIndexButtons = () => {
    return (
      <React.Fragment>
        {currentIndex - 4 >= 1 && (
          <React.Fragment>
            <Styled.CurrentPageButton onClick={() => onClickMoveIndex(1)}>
              1
            </Styled.CurrentPageButton>
            <Span mar={[0, 1.5, 0, 0]}>...</Span>
          </React.Fragment>
        )}
        <Styled.CurrentPageButton current>
          {currentIndex}
        </Styled.CurrentPageButton>
        {currentIndex + 4 <= postLists.length && (
          <React.Fragment>
            <Span mar={[0, 1.5, 0, 0]}>...</Span>
            <Styled.CurrentPageButton
              onClick={() => onClickMoveIndex(postLists.length)}
            >
              {postLists.length}
            </Styled.CurrentPageButton>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {isLoadedPost ? (
        <Post postData={post} />
      ) : (
        <Box height="676px">
          <Loading />
        </Box>
      )}

      <Box sort={BoxSort.CENTER_LEFT}>
        <Title size={TitleSize.xs} weight={TitleWeight.l} mar={[2, 0, 2, 2]}>
          게시판
        </Title>
      </Box>
      <Box sort={BoxSort.TOP_RIGHT} mar={[0, 0, 2, 0]}>
        <Button width="100px" height="34px" fontSize={ButtonFontSize.S}>
          글쓰기
        </Button>
      </Box>
      {isLoadedPostLists && (
        <Styled.TableContainer>
          <Table
            hover={true}
            headData={HeadData}
            bodyData={postLists[currentIndex - 1]}
          />
        </Styled.TableContainer>
      )}

      <Box sort={BoxSort.CENTER_CENTER} mar={[2, 0]}>
        {currentIndex !== 1 && (
          <Styled.PreviousButton
            onClick={() => onClickMoveIndex(currentIndex - 1)}
          />
        )}
        {renderPageIndexButtons()}
        {currentIndex !== postLists.length && (
          <Styled.NextButton
            onClick={() => onClickMoveIndex(currentIndex + 1)}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

Board.propTypes = {};

export default Board;
