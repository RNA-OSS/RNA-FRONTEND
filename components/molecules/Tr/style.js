import styled, { css } from "styled-components";
import { LIGHT_GRAY } from "../../../public/color";

export const Tr = styled.tr`
  ${(props) =>
    props.bordered &&
    css`
      border-bottom: 1px solid ${LIGHT_GRAY};
    `}
`;
