import React from "react";
import {
  WrapperLableText,
  WrapperTextContent,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";
const NabarComponent = () => {
  const onChange = () => {};
  const rederContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`tu ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
              <div style={{padding:'4px',color:'rgb(56,56,61)',borderRadius:'10px', backgroundColor:'rgb(238,238,238)',width:'fit-content'}} >{option}</div>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div style={{backgroundColor:'#fff'}}>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperTextContent>
        {rederContent("text", ["Tu Lanh", "TV", "May Lanh"])}
      </WrapperTextContent>
     
    </div>
  );
};

export default NabarComponent;
