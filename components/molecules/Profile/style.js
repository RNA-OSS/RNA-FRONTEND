import styled, { css } from "styled-components";

export const Profile = styled.div`
  width: ${(props) => props.width};
  border-radius: 50%;
  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
  img {
    width: 100%;
  }
`;
