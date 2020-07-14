import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";
import Button, { ButtonColor } from "../../atoms/Button";
import List from "../../molecules/List";
import ListItem from "../../molecules/ListItem";
import Title, { TitleSize, TitleType, TitleWeight } from "../../atoms/Title";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";
import P, { PSize, PWeight } from "../../atoms/P";
import Profile from "../../molecules/Profile";
import Border from "../../molecules/Border";
import Comment from "../Comment";

const Post = ({ postData }) => {
  return (
    <React.Fragment>
      <Box sort={BoxSort.CENTER_RIGHT} mar={[2, 0]}>
        <Button
          width="87px"
          height="34px"
          fontColor={ButtonColor.GRAY}
          backgroundColor={ButtonColor.WHITE}
          shadow={true}
          mar={[0, 1, 0, 0]}
        >
          이전 글
        </Button>
        <Button
          width="87px"
          height="34px"
          fontColor={ButtonColor.GRAY}
          backgroundColor={ButtonColor.WHITE}
          shadow={true}
          mar={[0, 1, 0, 0]}
        >
          다음 글
        </Button>
        <Button
          width="60px"
          height="34px"
          fontColor={ButtonColor.GRAY}
          backgroundColor={ButtonColor.WHITE}
          shadow={true}
          mar={[0, 1, 0, 0]}
        >
          목록
        </Button>
      </Box>
      <Box direction={BoxDirection.COL} sort={BoxSort.TOP_LEFT} card={true}>
        {/* 게시판, 게시글 제목 */}
        <Box
          direction={BoxDirection.COL}
          sort={BoxSort.CENTER_LEFT}
          mar={[0, 0, 2, 0]}
        >
          <Title
            size={TitleSize.xs}
            type={TitleType.warn}
            weight={TitleWeight.l}
          >
            {postData.board}
          </Title>

          <Title size={TitleSize.m} weight={TitleWeight.xl}>
            {postData.title}
          </Title>
        </Box>
        {/* 게시글 정보 */}
        <Box sort={BoxSort.CENTER_SPACE_BETWEEN}>
          {/* 게시글 작성자, 시간, 조회수 */}
          <Box width="auto">
            {/* 프로필 이미지 */}
            <Box width="auto" mar={[0, 1.2, 0, 0]}>
              <Profile width="36px" />
            </Box>
            <Box
              direction={BoxDirection.COL}
              sort={BoxSort.CENTER_LEFT}
              width="auto"
            >
              <Box sort={BoxSort.CENTER_LEFT}>
                <Span weight={SpanWeight.L} mar={[0, 0.6, 0, 0]}>
                  {postData.user}
                </Span>
                <Span color={SpanColor.GRAY}>동아리장</Span>
              </Box>
              <Box sort={BoxSort.CENTER_LEFT}>
                <Span mar={[0, 0.6, 0, 0]} color={SpanColor.GRAY}>
                  {postData.date}
                </Span>
                <Span color={SpanColor.GRAY}>조회수 {postData.view}</Span>
              </Box>
            </Box>
          </Box>
          {/* 댓글,공유하기 */}
          <Box width="auto" height="100%" sort={BoxSort.BOTTOM_LEFT}>
            <Span>댓글 2</Span>
            <Span>공유 1</Span>
          </Box>
        </Box>
        <Border mar={[2, 0]} />
        {/* 게시글 내용 */}
        <Box sort={BoxSort.TOP_LEFT} minHeight="310px">
          <P size={PSize.m}>{postData.contents}</P>
        </Box>

        <Box direction={BoxDirection.COL} sort={BoxSort.TOP_LEFT}>
          <Box sort={BoxSort.CENTER_SPACE_BETWEEN} mar={[0, 0, 1.2, 0]}>
            <Span>댓글</Span>
            <List>
              <ListItem>공유</ListItem>
              <ListItem>
                <Border width="1px" height="100%" />
              </ListItem>
              <ListItem>신고</ListItem>
            </List>
          </Box>
          <Comment commentLists={postData.comments} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

Post.propTypes = {
  postData: propTypes.object.isRequired,
};

export default Post;
