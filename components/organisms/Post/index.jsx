import React from "react";

import * as Styled from "./style";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";
import Title, { TitleSize, TitleType, TitleWeight } from "../../atoms/Title";

const Post = () => {
  return (
    <Box direction={BoxDirection.COL} sort={BoxSort.TOP_LEFT} card={true}>
      <Box
        direction={BoxDirection.COL}
        sort={BoxSort.CENTER_LEFT}
        mar={[0, 0, 2, 0]}
      >
        <Title size={TitleSize.xs} type={TitleType.warn} weight={TitleWeight.l}>
          공지사항
        </Title>

        <Title size={TitleSize.m} weight={TitleWeight.xl}>
          앙 테스트 글을 쓰는 중입니다.
        </Title>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Post;
