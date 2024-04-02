import React from "react";
import { Col, Row, Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MovieCatalog.scss";

const MovieCatalog = (props) => {
  const {
    movies: { results },
  } = props;
  return (
    <Row>
      {results.map((movie) => (
        <Col key={movie.id} xs={4} className="movie-catalog">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const { Meta } = Card;
  const posterPath = `
  https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <Link to={`/movie-react/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[<EyeOutlined key="eyeOutlined" />]}
        data-aos="zoom-in"
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}

export default MovieCatalog;
