import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const ImageLoader = ({ src = "", alt = "", width = "auto", onClick }) => {
  const srcPath = "/images/" + src;
  return src === "" ? (
    <Styled.NoImage width={width} />
  ) : (
    <Styled.Image width={width} onClick={onClick}>
      <img src={srcPath} alt={alt} />
    </Styled.Image>
  );
};

ImageLoader.propTypes = {
  img: propTypes.string,
  alt: propTypes.string,
  width: propTypes.string,
};

export default ImageLoader;
