import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";
import PaginationMovies from "../components/PaginationMovies";

const NewMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(`
      ${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`);
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const { results } = movieList;

  const onChangePage = (pg) => {
    setPage(pg);
  };

  return (
    <Row>
      <Col
        span="24"
        style={{
          textAlign: "center",
          marginTop: 25,
        }}
        data-aos="zoom-in"
      >
        <h1
          style={{
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          Ultimos lanzamientos
        </h1>
      </Col>
      {results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span={24}>
            <PaginationMovies
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
