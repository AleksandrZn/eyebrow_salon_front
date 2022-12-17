import { Button, Rate } from "antd";
import React, { useState } from "react";
import MasterTime from "./components/MasterTime";
import ServiceItem from "./components/ServiceItem";
import {
  Content,
  ContentWrapper,
  Header,
  Image,
  ServiceWrapper,
  Text,
  TextWrapper,
  Container,
} from "./index.styled";

const Appointment = () => {
  return (
    <>
      <Header>Услуги</Header>
      <ContentWrapper height={287}>
        <Image src="img/Photo4.jpg" />
        <Content>
          <ServiceWrapper>
            <ServiceItem />
          </ServiceWrapper>
          <Button>+</Button>
          <TextWrapper>
            <Text>Итого:</Text>
            <Text>4800р.</Text>
          </TextWrapper>
        </Content>
      </ContentWrapper>
      <Header>Мастер</Header>
      <ContentWrapper height={347}>
        <Image src="img/ProfileAvatar.jpg" />
        <Content>
          <div>Александра Рожкова</div>
          <div>мастер</div>
          <Rate defaultValue={5} />
          <MasterTime />
        </Content>
      </ContentWrapper>
    </>
  );
};

export default Appointment;
