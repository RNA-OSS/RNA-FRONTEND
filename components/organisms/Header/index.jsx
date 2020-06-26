import React, { useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import * as Styled from "./style";
import { LOGOUT_REQUEST } from "../../../reducers/user";
import Image, { Type } from "../../atoms/Image";
import A, { ASize, AWeight } from "../../atoms/A";
import Container from "../../molecules/Container";
import List, { ListAlignOrder } from "../../molecules/List";
import ListItem, { ItemAlignOrder } from "../../molecules/ListItem";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";

const Header = () => {
  const { me } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    dispatch({ type: LOGOUT_REQUEST });
  }, []);

  return (
    <Styled.HeaderContainer>
      <Container>
        <Box flexAttr={[0, 1, "283px"]}>
          <Link href="/">
            <A>
              <Image src="Logo.svg" type={Type.img} />
            </A>
          </Link>
        </Box>

        <Box
          direction={BoxDirection.ROW}
          sort={BoxSort.CENTER_SPACE_BETWEEN}
          height="100%"
          mar={[0, 0, 0, 3]}
        >
          <List align={ListAlignOrder.center} height="inherit">
            <ListItem
              height="inherit"
              margin="4rem"
              align={ItemAlignOrder.center}
            >
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                학교
              </A>
            </ListItem>
            <ListItem height="inherit" align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                동아리
              </A>
            </ListItem>
          </List>
          <List align={ListAlignOrder.center}>
            {me != null ? (
              <>
                <ListItem margin="2rem" align={ItemAlignOrder.center}>
                  <Styled.MyPageIcon />
                </ListItem>
                <ListItem align={ItemAlignOrder.center} onClick={onClickLogout}>
                  <Styled.LogoutIcon />
                </ListItem>
              </>
            ) : (
              <ListItem align={ItemAlignOrder.center}>
                <Link href="/SignPage/sign">
                  <a>
                    <Styled.LoginIcon />
                  </a>
                </Link>
              </ListItem>
            )}
          </List>
        </Box>
      </Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
