import styled from "styled-components";
import { MAIN_COLOR, WHITE } from "../../../public/color";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
  color: ${WHITE};
  background-color: ${MAIN_COLOR};
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s ease;
  &:hover {
    border: 2px solid ${MAIN_COLOR};
    box-shadow: inset 0 2px 0 ${MAIN_COLOR};
    background-color: ${WHITE};
    color: ${MAIN_COLOR};
  }
`;
