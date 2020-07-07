import styled from "styled-components";

export const Border = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;
