import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeproduct } from "./style";

const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "Lap Top"];
  return (
    <div style={{ padding: "0 120px"}}>
      <WrapperTypeproduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeproduct>
      HomePage
    </div>
  );
};

export default HomePage;
