import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import Container from "../../molecules/Container";
import Box, { BoxDirection, BoxSort } from "../../molecules/Box";
import ClubNavigation from "../../organisms/ClubNavigation";

const ClubLayout = ({ children }) => {
  return (
    <Styled.ClubContainer>
      <Box width="1200px" height="100%" sort={BoxSort.TOP_LEFT}>
        <Box
          direction={BoxDirection.COL}
          sort={BoxSort.TOP_CENTER}
          mar={[0, 3, 0, 0]}
          flexAttr={[1, 0, "210px"]}
        >
          <ClubNavigation />
        </Box>

        <Box
          sort={BoxSort.TOP_CENTER}
          direction={BoxDirection.COL}
          flexAttr={["auto"]}
        >
          {children}
        </Box>
      </Box>
    </Styled.ClubContainer>
  );
};

ClubLayout.propTypes = {
  children: propTypes.node,
};

export default ClubLayout;
