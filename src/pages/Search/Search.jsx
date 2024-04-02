import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";

import "./Search.scss";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const { search } = location;
      const { s } = queryString.parse(search);

      const reponse = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
      );
      const movies = await reponse.json();

      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);

  const oneChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    const { value } = e.target;
    urlParams.s = value;
    const urlSearch = `?${queryString.stringify(urlParams)}`;
    navigate(urlSearch);
    setSearchValue(value);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={oneChangeSearch} />
      </Col>
      {movieList.results && searchValue ? (
        movieList.results.length > 0 ? (
          <Col span={24} className="lista-movies">
            <MovieCatalog movies={movieList} />
          </Col>
        ) : (
          <Col
            span={24}
            className="lista-movies"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0px",
            }}
          >
            <Row>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                No se ha encontrado ningun resultado.
              </p>
            </Row>
          </Col>
        )
      ) : (
        <Col
          span={24}
          className="lista-movies"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <Row>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              Aun no se ha realizado una busqueda.
            </p>
          </Row>
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default Search;
