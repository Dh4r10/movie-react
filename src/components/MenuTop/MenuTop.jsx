import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import "./MenuTop.scss";

const MenuTop = () => {
  const items = [
    {
      label: <Link to="/movie-react">Home</Link>,
      key: "1",
    },
    {
      label: <Link to="/movie-react/newmovies">Ultimos lanzamientos</Link>,
      key: "2",
    },
    {
      label: <Link to="/movie-react/popular">Populares</Link>,
      key: "3",
    },
    {
      label: <Link to="/movie-react/search">Buscador</Link>,
      key: "4",
    },
  ];

  const [current, setCurrent] = useState(
    localStorage.getItem("current") || "1"
  );
  const location = useLocation();

  useEffect(() => {
    // Obtener la clave correspondiente a la ruta actual
    const currentKey = items.find(
      (item) => item.label.props.to === location.pathname
    )?.key;
    if (currentKey && current !== currentKey) {
      setCurrent(currentKey);
    }
  }, [location.pathname, items]);

  useEffect(() => {
    localStorage.setItem("current", current);
  }, [current]);

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ lineHeight: "64px" }}
        inlineIndent={1}
        className="menu-top__transition"
      />
    </div>
  );
};

export default MenuTop;
