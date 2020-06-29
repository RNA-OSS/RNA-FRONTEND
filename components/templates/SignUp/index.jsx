import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as Styled from "../SignIn/style";
import { SIGN_IN } from "../../../reducers/sign";
import SignUpForm from "../../organisms/SignUpForm";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import A, { ASize, AWeight, AType } from "../../atoms/A";
import Box, { BoxDirection } from "../../molecules/Box";

const SignUp = () => {
  const dispatch = useDispatch();

  const onClickLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: SIGN_IN });
  }, []);

  return (
    <Box direction={BoxDirection.COL} width="418px">
      <Title size={TitleSize.m} weight={TitleWeight.l} mar={[0, 0, 4, 0]}>
        이메일<span>과</span> 비밀번호
        <span>
          를 <br />
          알려주세요!
        </span>
      </Title>
      <SignUpForm />
      <Styled.SignMenu>
        <A size={ASize.s} weight={AWeight.m} type={AType.primary}>
          비밀번호찾기
        </A>
        <A
          size={ASize.s}
          weight={AWeight.m}
          type={AType.primary}
          onClick={onClickLogin}
        >
          로그인
        </A>
      </Styled.SignMenu>
    </Box>
  );
};

export default SignUp;
