import React from "react";

import * as Styled from "./style";
import ClubMenu from "../ClubMenu";
import List, { ListDirection, ListSort } from "../../molecules/List";
import ListItem, { ItemDirection, ItemSort } from "../../molecules/ListItem";
import Image, { Type } from "../../atoms/Image";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";

const dummyData = {
  leader: "조재권",
  heads: 104,
  totalHeads: 1301,
  founded: "1995.07.12",
  numeral: 12,
  place: "학생회관 211호",
};

const ClubNavigation = () => {
  const renderClubInformation = () => {
    return (
      <List
        card={true}
        direction={ListDirection.COL}
        sort={ListSort.SPACE_BETWEEN_CENTER}
        width="100%"
        mar={[0, 0, 2, 0]}
      >
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            동아리 회장
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.leader}
          </Span>
        </ListItem>
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            인원수
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.heads}
          </Span>
        </ListItem>
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            누적인원
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.totalHeads}
          </Span>
        </ListItem>
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            설립일
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.founded}
          </Span>
        </ListItem>
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            기수
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.numeral}
          </Span>
        </ListItem>
        <ListItem width="inherit" sort={ItemSort.CENTER_SPACE_BETWEEN}>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            장소
          </Span>
          <Span size={SpanSize.S} weight={SpanWeight.M} color={SpanColor.GRAY}>
            {dummyData.place}
          </Span>
        </ListItem>
      </List>
    );
  };

  return (
    <>
      <List width="100%" direction={ListDirection.COL} mar={[3, 0, 0, 0]}>
        <ListItem direction={ItemDirection.COL} sort={ItemSort.TOP_CENTER}>
          <Image
            marginBottom="2rem"
            type={Type.img}
            src="clubLogo.jpg"
            circle={true}
          />
          <Title size={TitleSize.xs} weight={TitleWeight.xl}>
            동국대학교
          </Title>
          <Span
            size={SpanSize.S}
            weight={SpanWeight.L}
            color={SpanColor.GRAY}
            mar={[0, 0, 2, 0]}
          >
            DNA
          </Span>
        </ListItem>
        <ListItem width="inherit">{renderClubInformation()}</ListItem>
      </List>
      <ClubMenu />
    </>
  );
};

export default ClubNavigation;
