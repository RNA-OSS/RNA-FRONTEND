import styled from "styled-components";

import { NORMAL_GRAY, DARK_GRAY, MAIN_COLOR } from "../../../public/color";
import { TEXT_S } from "../../../public/font";

export const TextArea = styled.textarea`
  background-image: none;
  border: 0;
  -webkit-appearance: none;
  resize: none;

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
`;
