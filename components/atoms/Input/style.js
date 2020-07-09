import styled, { css } from "styled-components";

import { NORMAL_GRAY, DARK_GRAY, MAIN_COLOR } from "../../../public/color";
import { TEXT_S } from "../../../public/font";

export const Input = styled.input`
  background-image: none;
  border: 0;
  -webkit-appearance: none;

  width: 100%;
  height: ${(props) => props.height};
  font-size: ${TEXT_S};
  color: ${DARK_GRAY};
  &::placeholder {
    color: ${NORMAL_GRAY};
  }
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.style === "border" &&
    css`
      border-bottom: 1px solid ${NORMAL_GRAY};
      transition: border-color 0.3s ease;
      margin-bottom: ${(props) => props.marginBottom};
      &:focus {
        border-color: ${MAIN_COLOR};
      }
    `}
`;
