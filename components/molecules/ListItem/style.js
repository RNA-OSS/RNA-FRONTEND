import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  align-self: ${(props) => props.self};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
