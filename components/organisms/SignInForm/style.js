import styled from "styled-components";
import { DARK_GRAY } from "../../../public/color";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  & > label {
    display: inline-block;
    margin-bottom: 1.8rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: ${DARK_GRAY};
  }
`;
