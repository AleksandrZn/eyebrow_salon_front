import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  LinkWrapper,
  Logo,
  Text,
} from "./index.styled";

export const Footer = () => {
  return (
      <FooterContainer>
        <Text>©2022 alexandrova brows.</Text>
        <LinkWrapper>
          <a>О студии</a>
          <a>Справка</a>
        </LinkWrapper>
        <Text>+79000000000</Text>
      </FooterContainer>
  );
};
