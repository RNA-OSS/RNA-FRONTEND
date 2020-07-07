import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.wrap};
`;
