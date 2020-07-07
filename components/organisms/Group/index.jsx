import React from "react";

import * as Styled from "./style";
import List, { ListDirection, ListSort } from "../../molecules/List";
import ListItem, { ItemSelfSort, ItemSort } from "../../molecules/ListItem";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Span, { SpanSize, SpanColor } from "../../atoms/Span";
import Button from "../../atoms/Button";
import Box, { BoxDirection, BoxSort, BoxWrap } from "../../molecules/Box";

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
        direction={ListDirection.COL}
        sort={ListSort.SPACE_BETWEEN_CENTER}
        width="32%"
        height="393px"
        mar={[0, 0, 2, 0]}
        card={true}
        shadow={true}
        key={data.id}
      >
        <ListItem self={ItemSelfSort.START}>
          <Styled.GroupState>{data.dDay}</Styled.GroupState>
        </ListItem>
        <ListItem width="100%" sort={ItemSort.TOP_CENTER}>
          <Title size={TitleSize.s} weight={TitleWeight.l}>
            {data.title}
          </Title>
        </ListItem>
        <ListItem width="100%">
          <Box direction={BoxDirection.COL} pad={["2"]}>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN} mar={[0, 0, 2, 0]}>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                멘토
              </Span>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                {data.mentor}
              </Span>
            </Box>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN} mar={[0, 0, 2, 0]}>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                모집인원
              </Span>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                {data.heads}/{data.maxHeads}
              </Span>
            </Box>
            <Box sort={BoxSort.CENTER_SPACE_BETWEEN} mar={[0, 0, 2, 0]}>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                활동기간
              </Span>
              <Span size={SpanSize.S} color={SpanColor.GRAY}>
                {data.period}
              </Span>
            </Box>
          </Box>
        </ListItem>
        <ListItem width="100%" sort={ItemSort.TOP_CENTER}>
          <Button width="60%" height="40px">
            지원하기
          </Button>
        </ListItem>
      </List>
    ));

  return (
    <Box wrap={BoxWrap.WRAP} sort={BoxSort.CENTER_SPACE_BETWEEN}>
      {renderGroupItem(dummyGroups)}
    </Box>
  );
};

export default Group;
