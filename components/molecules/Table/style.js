import styled, { css } from "styled-components";
import { MAIN_COLOR, LIGHT_GRAY } from "../../../public/color";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: ${(props) => props.padding};
  ${(props) =>
    props.hover &&
    css`
      tbody > tr {
        transition: all 0.3s ease;
        &:hover {
          background-color: ${LIGHT_GRAY};
        }
      }
    `}
`;
