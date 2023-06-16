import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, LinkWrapper, Logo, Text } from "./index.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <Text>©2022 alexandrova brows.</Text>
      <LinkWrapper>О студии</LinkWrapper>
      <Text>sann12346464@gmai.com</Text>
    </FooterContainer>
  );
};
