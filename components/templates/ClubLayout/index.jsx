import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Container from "../../molecules/Container";
import ClubNavigation from "../../organisms/ClubNavigation";

const ClubLayout = ({ children }) => {
  return (
    <Styled.ClubContainer>
      <Container>
        <Styled.NavContainer>
          <ClubNavigation />
        </Styled.NavContainer>

        <Styled.ContentContainer>{children}</Styled.ContentContainer>
      </Container>
    </Styled.ClubContainer>
  );
};

ClubLayout.propTypes = {
  children: propTypes.node,
};

export default ClubLayout;
