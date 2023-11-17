import { Input } from "antd";
import React from "react";

const InputComponent = ({size,placeholder,bordered,backgroundColorInput, ...reasts}) => {
  return (
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput}}
        {...reasts}
      />
  );
};

export default InputComponent;
