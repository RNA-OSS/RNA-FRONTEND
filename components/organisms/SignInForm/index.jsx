import React from "react";

import * as Styled from "./style";
import Input, { InputStyle } from "../../atoms/Input";
import Button from "../../atoms/Button";
import Box, { BoxDirection } from "../../molecules/Box";

import useInput from "../../../hooks/useInput";

const SignInForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <Box direction={BoxDirection.COL}>
      <Styled.InputContainer>
        <label htmlFor="input-email">이메일</label>
        <Input
          id="input-email"
          marginBottom="6rem"
          value={email}
          onChange={onChangeEmail}
          style={InputStyle.BORDER}
          required
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <label htmlFor="input-password">비밀번호</label>
        <Input
          id="input-password"
          marginBottom="6rem"
          type="password"
          value={password}
          onChange={onChangePassword}
          style={InputStyle.BORDER}
          required
        />
      </Styled.InputContainer>
      <Button width="100%" height="60px">
        로그인
      </Button>
    </Box>
  );
};

export default SignInForm;
