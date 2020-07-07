import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { MAIN_COLOR } from "../../../public/color";

export const Profile = styled.div`
  width: ${(props) => props.width};
  border-radius: 50%;
  img {
    width: 100%;
  }
`;

export const NoImage = styled(UserOutlined)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.width};
  border-radius: 50%;
  border: 2px solid ${MAIN_COLOR};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  cursor: pointer;
  overflow: hidden;
`;
