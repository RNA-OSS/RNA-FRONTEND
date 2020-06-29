import styled from "styled-components";
import { BLACK, MAIN_COLOR } from "../../../public/color";
import { TEXT_M } from "../../../public/font";

const NOTICE_IMAGE_WIDTH = "336px";
const NOTICE_IMAGE_HEIGHT = "472px";

const INTERVAL = "30px";

export const NoticeImageContainer = styled.div`
  flex: 1 0 ${NOTICE_IMAGE_WIDTH};
  height: ${NOTICE_IMAGE_HEIGHT};
  overflow: hidden;
  border-radius: 10px;
  margin-right: ${INTERVAL};
`;

export const NoticeInformationText = styled.article`
  overflow-y: scroll;
  a {
    color: ${MAIN_COLOR};
  }
`;
