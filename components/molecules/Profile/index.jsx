import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const Profile = ({ src = "", alt = "", width = "auto", onClick }) => {
  const srcPath = "/images/" + src;
  return src === "" ? (
    <Styled.NoImage width={width} />
  ) : (
    <Styled.Profile width={width} onClick={onClick}>
      <img src={srcPath} alt={alt} />
    </Styled.Profile>
  );
};

Profile.propTypes = {
  img: propTypes.string,
  alt: propTypes.string,
  width: propTypes.string,
};

export default Profile;
