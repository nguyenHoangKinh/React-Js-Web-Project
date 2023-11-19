import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WarpperPriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;
export const WarpperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;
export const WarpperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
  }
  span.change-address {
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
export const WarpperQualityProduct = styled.h1`
  display: flex;
  gap: 4px;
  align-item: center;
  width: 100px;
  border: 1px solid red;
  border-radius: 4px;
`;
export const WarpperInputNumber = styled(InputNumber)`
  width: 60px;
  height: 30px;
  border-top: none;
  border-button: none;
  border-radius: 0px;
  .ant-input-number-handler-wrap {
    display:none;
  }
  
`;
