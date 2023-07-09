import React from "react";
import { FooterContainer, Text } from "./index.styled";
import { footer } from "../../utils/data";

export const Footer = () => {
  return (
    <FooterContainer>
      <Text>{footer.text}</Text>
      <Text>{footer.email}</Text>
    </FooterContainer>
  );
};
