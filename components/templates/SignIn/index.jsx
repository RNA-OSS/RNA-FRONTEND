import React, { useCallback } from "react";

import * as Styled from "./style";
import SignInForm from "../../organisms/SignInForm";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../../reducers/sign";
import { LOGIN_REQUEST } from "../../../reducers/user";
import A, { ASize, AWeight, AType } from "../../atoms/A";
import Box, { BoxDirection } from "../../molecules/Box";

const SignIn = () => {
  const dispatch = useDispatch();

  const onClickLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_REQUEST });
  }, []);

  const onClickToSignUp = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: SIGN_UP });
  }, []);

  return (
    <Box direction={BoxDirection.COL} width="418px">
      <Title size={TitleSize.m} weight={TitleWeight.l} mar={[0, 0, 4, 0]}>
        이메일<span>로 로그인하세요</span>
      </Title>
      <SignInForm />
      <Styled.SignMenu>
        <A size={ASize.s} weight={AWeight.m} type={AType.primary}>
          비밀번호찾기
        </A>
        <A
          size={ASize.s}
          weight={AWeight.m}
          type={AType.primary}
          onClick={onClickToSignUp}
        >
          회원가입
        </A>
      </Styled.SignMenu>
    </Box>
  );
};

export default SignIn;
