import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import "./SliderMovies.scss";

const SliderMovies = (props) => {
  const {
    movies: { loading, result },
  } = props;

  if (loading || !result) {
    return <Loading height="500px" />;
  } else {
    const { results } = result;
    return (
      <Carousel autoplay className="slider-movies">
        {results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Carousel>
    );
  }
};

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;

  const backdropPath = `
  https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{
        backgroundImage: `url(${backdropPath})`,
      }}
      data-aos="zoom-in"
    >
      <div className="slider-movies__movie-info">
        <div className="slider-movies__movie-info-description">
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie-react/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderMovies;
