import React from "react";
import { Spin } from "antd";

import "./Loading.scss";

const Loading = (props) => {
  const { height } = props;

  return (
    <div className="loading" style={{ height: height }}>
      <Spin tip="Cargando" size="large">
        <div className="loading__content" />
      </Spin>
    </div>
  );
};

export default Loading;
