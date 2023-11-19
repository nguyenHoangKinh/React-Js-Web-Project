import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import ImageProduct from "../../assets/images/test.webp";
import ImageProductSmall from "../../assets/images/imagesmall.webp";
import {
  WarpperAddressProduct,
  WarpperBtnQualityProduct,
  WarpperInputButton,
  WarpperInputNumber,
  WarpperPriceProduct,
  WarpperPriceTextProduct,
  WarpperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{background:'#fff'}}>
      <Col span={10} style={{borderRight:'1px solid #e5e5e5',paddingRight:'6px',borderRadius:'4px'}}>
        <Image src={ImageProduct} alt="Image product" preview={false} />
        <Row style={{ padding: "10px" }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductSmall}
              alt="imgae small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>
          sach - tham tu lung danh conan - combo 10 tap tu tap 81 den tap 90
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WarpperPriceProduct>
          <WarpperPriceTextProduct>200.000d</WarpperPriceTextProduct>
        </WarpperPriceProduct>
        <WarpperAddressProduct>
          <span>Giao den</span>
          <span className="address">Q. 1, P. Ben nghe, Ho Chi Minh</span>
          <span className="change-address">Doi dia chi</span>
        </WarpperAddressProduct>
        <div style={{margin:'10px 0 20px', padding:'10px 0',borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
          <div style={{marginButton:'10px'}}>So Luong</div>
          <WarpperQualityProduct>
            <button
              style={{
                width: "30px",
                border: "none",
                background: "transparent",
              }}
            >
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WarpperInputNumber
              className="ant-input-number-input-wrap"
              defaultValue={3}
              onChange={onChange}
            />
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WarpperQualityProduct>
        </div>
        <div style={{display:'flex', alignItem:'center',gap:'12px'}}>
          <ButtonComponent
            size={40}
            styleButton={{
              backgroundColor: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              borderRadius: "4px",
            }}
            styleTextButton={{ color: '#fff',fontSize:'15px',fontWeight:'700' }}
            textButton={"Cho Mua"}
          />
          <ButtonComponent
            size={40}
            styleButton={{
              backgroundColor: "#fff",
              height: "48px",
              width: "220px",
              border:'1px solid rgb(13,92,182)',
              borderRadius: "4px",
            }}
            styleTextButton={{ color: 'rgb(13,92,182)',fontSize:'15px' }}
            textButton={"Mua Tra sau"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
