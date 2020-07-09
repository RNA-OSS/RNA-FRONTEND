import React from "react";
import propTypes from "prop-types";

import * as Styled from "styled-components";
import Profile from "../../molecules/Profile";
import Box, { BoxSort, BoxDirection } from "../../molecules/Box";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";
import P, { PType, PWeight } from "../../atoms/P";

const SingleComment = ({}) => {
  return (
    <Box pad={[2, 0]} sort={BoxSort.TOP_SPACE_BETWEEN}>
      <Box width="auto" mar={[0, 1.2, 0, 0]}>
        <Profile width="36px" />
      </Box>
      <Box direction={BoxDirection.COL} flexAttr={["auto"]}>
        <Box sort={BoxSort.TOP_SPACE_BETWEEN} mar={[0, 0, 1.2, 0]}>
          <Box width="auto">
            <Span size={SpanSize.S} weight={SpanWeight.L} mar={[0, 0.6, 0, 0]}>
              호호호잼누쿤
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

        <Box sort={BoxSort.TOP_LEFT} width="auto">
          <P type={PType.gray} weight={PWeight.l}>
            아아아아아아앙 가모라~! 아아아아아아앙 가모라~! 아아아아아아앙
            가모라~! 아아아아아아앙 가모라~! 아아아아아아앙 가모라~!
            아아아아아아앙 가모라~! 아아아아아아앙 가모라~!
          </P>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleComment;
