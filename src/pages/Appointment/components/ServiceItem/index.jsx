import { Button } from "antd";
import React, { useState } from "react";
import { Item, Text, TextWrapper } from "./index.styled";

const ServiceItem = () => {
  return (
    <Item>
      <Text>Долговременная укладка бровей+окрашивание и коррекция</Text>
      <TextWrapper>
        <Text> Цена:</Text>
        <Text>2400р.</Text>
      </TextWrapper>
      <Button>x</Button>
    </Item>
  );
};

export default ServiceItem;
