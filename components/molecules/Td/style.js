import styled, { css } from "styled-components";

export const Td = styled.td`
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;
