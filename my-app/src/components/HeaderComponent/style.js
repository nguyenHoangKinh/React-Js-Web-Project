import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap:16px;
  flex-wrap: nowrap;  
`;
export const WrappeTextrHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;
export const WrapperHeaderAccout = styled.span`
  display: flex;
  align-items: center;
`;
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;
