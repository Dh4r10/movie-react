import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { RightOutlined } from "@ant-design/icons";

import "./MovieList.scss";

const MovieList = (props) => {
  const {
    title,
    movies: { loading, result },
  } = props;

  if (loading || !result) {
    return <Loading height="500px" />;
  } else {
    const { results } = result;
    return (
      <List
        className="movie-list"
        size="default"
        header={<h2>{title}</h2>}
        bordered
        dataSource={results}
        renderItem={(movie) => <RenderMovie movie={movie} />}
      />
    );
  }
};

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie-react/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie-react/movie/${id}`}>
        <Button
          type="primary"
          shape="default"
          icon={<RightOutlined />}
        ></Button>
      </Link>
    </List.Item>
  );
}

export default MovieList;
