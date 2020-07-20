import styled, { css } from "styled-components";
import { WHITE } from "../../../public/color";

const Card = css`
  background-color: ${WHITE};
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
`;

export const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  flex-wrap: ${(props) => props.wrap};
  ${(props) => props.card && Card}
`;
