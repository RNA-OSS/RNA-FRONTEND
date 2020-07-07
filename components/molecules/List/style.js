import styled, { css } from "styled-components";
import { WHITE, MAIN_COLOR } from "../../../public/color";

const Card = css`
  background-color: ${WHITE};
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
`;

const CardShadow = css`
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 5px 5px 0 ${MAIN_COLOR};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  ${(props) => props.card && Card};
  ${(props) => props.shadow && CardShadow};
`;
