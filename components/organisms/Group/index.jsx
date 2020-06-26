import React from "react";

import * as Styled from "./style";
import List, {
  ListDirection,
  ListAlignOrder,
  ListJustifyOrder,
} from "../../molecules/List";
import ListItem, {
  ItemSelfOrder,
  ItemJustifyOrder,
} from "../../molecules/ListItem";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Span, { SpanType, SpanSize } from "../../atoms/Span";
import Button from "../../atoms/Button";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";

const dummyGroups = [
  {
    id: 1,
    title: "Web Frontend Study",
    mentor: "조재권",
    dDay: "D-1",
    heads: 12,
    maxHeads: 30,
    period: "20.03.16-20.06.21",
  },
  {
    id: 2,
    title: "Data structure",
    mentor: "이윤우",
    dDay: "D-1",
    heads: 7,
    maxHeads: 10,
    period: "20.03.16-20.06.20",
  },
  {
    id: 3,
    title: "Algorithm masters",
    mentor: "이현재",
    dDay: "D-21",
    heads: 21,
    maxHeads: 30,
    period: "20.03.16-20.12.11",
  },
  {
    id: 4,
    title: "Photoshop lecture",
    mentor: "잼누팍",
    dDay: "D-10",
    heads: 10,
    maxHeads: 20,
    period: "20.03.16-20.12.11",
  },
];

const Group = () => {
  let renderGroupItem = (groupList) =>
    groupList.map((data) => (
      <List
        direction={ListDirection.col}
        align={ListAlignOrder.center}
        justify={ListJustifyOrder.between}
        width="32%"
        height="393px"
        margin="2rem"
        card={true}
        shadow={true}
        key={data.id}
      >
        <ListItem self={ItemSelfOrder.start}>
          <Styled.GroupState>{data.dDay}</Styled.GroupState>
        </ListItem>
        <ListItem width="100%" justify={ItemJustifyOrder.center}>
          <Title size={TitleSize.s} weight={TitleWeight.l}>
            {data.title}
          </Title>
        </ListItem>
        <ListItem width="100%">
          <Box direction={BoxDirection.COL} pad={["2"]}>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN}>
              <Span size={SpanSize.s} type={SpanType.gray}>
                멘토
              </Span>
              <Span size={SpanSize.s} type={SpanType.gray} marginBottom="2rem">
                {data.mentor}
              </Span>
            </Box>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN}>
              <Span size={SpanSize.s} type={SpanType.gray}>
                모집인원
              </Span>
              <Span size={SpanSize.s} type={SpanType.gray} marginBottom="2rem">
                {data.heads}/{data.maxHeads}
              </Span>
            </Box>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN}>
              <Span size={SpanSize.s} type={SpanType.gray}>
                활동기간
              </Span>
              <Span size={SpanSize.s} type={SpanType.gray} marginBottom="2rem">
                {data.period}
              </Span>
            </Box>
          </Box>
        </ListItem>
        <ListItem width="100%" justify={ItemJustifyOrder.center}>
          <Button width="60%" height="40px">
            지원하기
          </Button>
        </ListItem>
      </List>
    ));

  return (
    <Styled.GroupContainer>
      {renderGroupItem(dummyGroups)}
    </Styled.GroupContainer>
  );
};

export default Group;
