import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeproduct = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  justify-content: flex-start;
  border-bottom: 1px solid red;
  height: 44px;
`;
export const WrapperButtonComponent = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13,92,182);
    span{
      color: #fff;
    }
  },
  width: 100%;
  text-align: center;
  
`;
