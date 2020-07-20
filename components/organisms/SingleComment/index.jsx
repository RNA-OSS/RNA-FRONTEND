import React from "react";
import propTypes from "prop-types";

import * as Styled from "styled-components";
import ImageLoader from "../../molecules/ImageLoader";
import Box, { BoxSort, BoxDirection } from "../../molecules/Box";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";
import P, { PType, PWeight } from "../../atoms/P";

const SingleComment = ({ comment }) => {
  return (
    <Box pad={[2, 0]} sort={BoxSort.TOP_SPACE_BETWEEN}>
      <Box width="auto" mar={[0, 1.2, 0, 0]}>
        <ImageLoader width="36px" />
      </Box>
      <Box direction={BoxDirection.COL} flexAttr={["auto"]}>
        <Box sort={BoxSort.TOP_SPACE_BETWEEN} mar={[0, 0, 1.2, 0]}>
          <Box width="auto">
            <Span size={SpanSize.S} weight={SpanWeight.L} mar={[0, 0.6, 0, 0]}>
              {comment.user}
            </Span>
            <Span
              size={SpanSize.S}
              weight={SpanWeight.L}
              color={SpanColor.GRAY}
            >
              16분전
            </Span>
          </Box>
          <Box width="auto">
            <Span
              size={SpanSize.S}
              weight={SpanWeight.L}
              color={SpanColor.GRAY}
            >
              답글 쓰기
            </Span>
          </Box>
        </Box>

        <Box sort={BoxSort.TOP_LEFT}>
          <P type={PType.gray} weight={PWeight.l}>
            {comment.contents}
          </P>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleComment;
