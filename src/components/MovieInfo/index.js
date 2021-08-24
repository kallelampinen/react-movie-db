import React from "react";
//Compnent
import Thumb from "../Thumb";
// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//Image
import noImage from "../../images/no_image.jpg";

//Styles

import { Wrapper, Content, Text } from "../MovieInfo/MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : noImage
        }
        clickable={false}
        alt="movie thumb"
      ></Thumb>
    </Content>
  </Wrapper>
);

export default MovieInfo;
