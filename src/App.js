import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

// Pages
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Movie from "./pages/Movie/Movie";
import Error404 from "./pages/Error404";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header style={{ zIndex: 1 }}>
        <MenuTop />
      </Header>
      <Content>
        <Routes>
          <Route path="/movie-react" element={<Home />} />
          <Route path="/movie-react/newmovies" element={<NewMovies />} />
          <Route path="/movie-react/popular" element={<Popular />} />
          <Route path="/movie-react/search" element={<Search />} />
          <Route path="/movie-react/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
