import React from "react";
import Link from "next/link";

import * as Styled from "./style";
import List, { ListDirection, ListSort } from "../../molecules/List";
import ListItem, { ItemSort } from "../../molecules/ListItem";
import A, { ASize, AWeight, AType } from "../../atoms/A";
import Span, { SpanSize, SpanWeight, SpanColor } from "../../atoms/Span";

const menuItems = [
  {
    id: 1,
    type: "favorite",
    content: "즐겨찾는 게시판",
  },
  {
    id: 2,
    type: "general",
    content: "전체 글보기",
  },
  {
    id: 3,
    type: "class",
    content: "필수사항",
  },
  {
    id: 4,
    type: "general",
    content: "공지사항",
  },
  {
    id: 5,
    type: "general",
    content: "가입인사",
  },
  {
    id: 6,
    type: "class",
    content: "스터디",
  },
  ,
  {
    id: 7,
    type: "general",
    content: "웹 스터디",
  },
  ,
  {
    id: 8,
    type: "general",
    content: "알고리즘 스터디",
  },
];

const ClubMenu = () => {
  let renderMenuList = (menuData) =>
    menuData.map((data) => (
      <React.Fragment key={data.id}>
        {data.type === "favorite" && (
          <ListItem sort={ItemSort.CENTER_LEFT} height="24px">
            <Span size={SpanSize.S} weight={SpanWeight.L} type={SpanColor.GRAY}>
              <Styled.FavoriteIcon />
              {data.content}
            </Span>
          </ListItem>
        )}
        {data.type === "class" && (
          <ListItem sort={ItemSort.CENTER_LEFT} height="24px">
            <Span size={SpanSize.S} weight={SpanWeight.L} type={SpanColor.GRAY}>
              # {data.content}
            </Span>
          </ListItem>
        )}
        {data.type === "general" && (
          <ListItem sort={ItemSort.CENTER_LEFT} height="24px">
            <Link href="/BoardPage/board">
              <A size={ASize.s} weight={AWeight.m} type={AType.gray}>
                <Styled.ArrowIcon />
                {data.content}
              </A>
            </Link>
          </ListItem>
        )}
      </React.Fragment>
    ));

  return (
    <List
      card={true}
      direction={ListDirection.COL}
      sort={ListSort.CENTER_LEFT}
      width="100%"
    >
      {renderMenuList(menuItems)}
    </List>
  );
};

export default ClubMenu;
