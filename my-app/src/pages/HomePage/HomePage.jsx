import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeproduct } from "./style";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import SilderComponent from "../../components/SilderComponent/SilderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "Lap Top"];

  return (
<>
<div style={{ padding: "0 120px" }}>
      <WrapperTypeproduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeproduct>
    </div>
      <div id="container" style={{ backgroundColor: "#efefef", padding:'0 120px',height:'1000px'}}>
        <SilderComponent arrImages={[slider1, slider2, slider3]} />
      <div style={{marginTop:'20px', display:'flex', alignItems:'center',gap:'20px'}}>
      <CardComponent/>
      </div>
      </div>
</>
  );
};

export default HomePage;
