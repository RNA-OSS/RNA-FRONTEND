import styled, { css } from "styled-components";
import { WHITE, MAIN_COLOR, DARK_GRAY } from "../../../public/color";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const TableContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 860px;
  background-color: ${WHITE};
  border-radius: 20px;
  overflow: hidden;
`;

const BoardButtonIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${WHITE};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const PreviousButton = styled(LeftOutlined)`
  ${BoardButtonIcon}
  margin-right: 2rem;
`;

export const NextButton = styled(RightOutlined)`
  ${BoardButtonIcon}
`;

export const CurrentPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${DARK_GRAY};
  cursor: pointer;
  border-radius: 50%;
  margin-right: 15px;
  background-color: rgba(0, 0, 0, 0);

  ${(props) =>
    props.current &&
    css`
      color: ${WHITE};
      background-color: ${MAIN_COLOR};
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    `}
`;
