import React, { Fragment } from "react";
import NabarComponent from "../../components/NabarComponent/NabarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WarpperNavbar, WarpperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WarpperNavbar span={4}>
          <NabarComponent />
        </WarpperNavbar>
        <Col span={20}>
          <WarpperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WarpperProducts>
      <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign:'center',marginTop:'10px'}}
      />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
