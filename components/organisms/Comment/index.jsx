import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import SingleComment from "../SingleComment";
import Border from "../../molecules/Border";
import Box, { BoxSort, BoxDirection } from "../../molecules/Box";
import Span, { SpanWeight, SpanColor } from "../../atoms/Span";
import TextArea from "../../atoms/TextArea";
import Button, { ButtonColor, ButtonFontSize } from "../../atoms/Button";
import useInput from "../../../hooks/useInput";

const Comment = ({ commentLists }) => {
  const [contents, onChangeContents] = useInput("");

  return (
    <React.Fragment>
      {commentLists &&
        commentLists.map(
          (comment) => !comment.responseTo && <React.Fragment></React.Fragment>
        )}
      <Border />
      <SingleComment />
      <Border />
      <SingleComment />

      <Styled.CommentContainer>
        <Box sort={BoxSort.CENTER_SPACE_BETWEEN} mar={[0, 0, 1, 0]}>
          <Span weight={SpanWeight.L}>호호호잼누쿤</Span>
          <Span color={SpanColor.GRAY}>{contents.length}/1000</Span>
        </Box>
        <Box direction={BoxDirection.ROW} sort={BoxSort.BOTTOM_SPACE_BETWEEN}>
          <TextArea
            id="input-comment"
            value={contents}
            onChange={onChangeContents}
            height="60px"
            required
          />
          <Button
            width="50px"
            height="34px"
            fontSize={ButtonFontSize.S}
            fontColor={ButtonColor.MAIN}
            backgroundColor={ButtonColor.LIGHT_MAIN}
            shadow={true}
          >
            등록
          </Button>
        </Box>
      </Styled.CommentContainer>
    </React.Fragment>
  );
};

Comment.propTypes = {
  commentLists: propTypes.array,
};

export default Comment;
