import React, { useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import * as Styled from "./style";
import { LOGOUT_REQUEST } from "../../../reducers/user";
import Image, { Type } from "../../atoms/Image";
import A, { ASize, AWeight } from "../../atoms/A";
import List, { ListSort } from "../../molecules/List";
import ListItem, { ItemSort } from "../../molecules/ListItem";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";

const Header = () => {
  const { me } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    dispatch({ type: LOGOUT_REQUEST });
  }, []);

  return (
    <Styled.HeaderContainer>
      <Box width="1200px" height="100%">
        {/* 로고 */}
        <Box sort={BoxSort.CENTER_LEFT} flexAttr={[0, 1, "283px"]}>
          <Link href="/">
            <a>
              <Image src="Logo.svg" type={Type.img} />
            </a>
          </Link>
        </Box>
        {/* 메뉴 */}
        <Box
          direction={BoxDirection.ROW}
          sort={BoxSort.CENTER_SPACE_BETWEEN}
          flexAttr={["auto"]}
          height="100%"
          mar={[0, 0, 0, 3]}
        >
          <List sort={ListSort.CENTER_LEFT} height="inherit">
            <ListItem
              sort={ItemSort.CENTER_LEFT}
              height="inherit"
              mar={[0, 4, 0, 0]}
            >
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                학교
              </A>
            </ListItem>
            <ListItem sort={ItemSort.CENTER_LEFT} height="inherit">
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                동아리
              </A>
            </ListItem>
          </List>
          <List sort={ListSort.CENTER_LEFT}>
            {me != null ? (
              <>
                <ListItem sort={ItemSort.CENTER_LEFT} mar={[0, 2, 0, 0]}>
                  <Styled.MyPageIcon />
                </ListItem>
                <ListItem sort={ItemSort.CENTER_LEFT} onClick={onClickLogout}>
                  <Styled.LogoutIcon />
                </ListItem>
              </>
            ) : (
              <ListItem sort={ItemSort.CENTER_LEFT}>
                <Link href="/SignPage/sign">
                  <a>
                    <Styled.LoginIcon />
                  </a>
                </Link>
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </Styled.HeaderContainer>
  );
};

export default Header;
