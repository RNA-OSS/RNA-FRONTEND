import styled, { css } from "styled-components";
import { MAIN_COLOR, LIGHT_MAIN_COLOR, WHITE } from "../../../public/color";
import { WEIGHT_L } from "../../../public/font";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
  font-weight: ${WEIGHT_L};
  text-transform: uppercase;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  ${(props) =>
    props.hover &&
    css`
      transition: all 0.3s ease;

      &:hover {
        border: 2px solid ${MAIN_COLOR};
        box-shadow: inset 0 2px 0 ${MAIN_COLOR};
        background-color: ${LIGHT_MAIN_COLOR};
        color: ${WHITE};
      }
    `}
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    `}
`;
