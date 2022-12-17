import React from "react";
import {
  Image,
  AddBasketBtn,
  BuyBtn,
  CourseWrapper,
  Description,
  DescriptionBtn,
  DescriptionWrapper,
  Header,
  Price,
  TextWrapper,
  WrapperBtn,
} from "./index.stylde";

const Course = () => {
  return (
    <CourseWrapper>
      <Image>Картинка</Image>
      <TextWrapper>
        <Header>Заголовок</Header>
        <DescriptionWrapper>
          <DescriptionBtn>Скрыть/Раскрыть</DescriptionBtn>
          <Description>
            Описание видеоурока бла бла бла бла бла бла бла бла бла бла бла
          </Description>
        </DescriptionWrapper>
      </TextWrapper>
      <Price>4500</Price>
      <WrapperBtn>
        <AddBasketBtn>Добавить в корзину</AddBasketBtn>
        <BuyBtn>Купить</BuyBtn>
      </WrapperBtn>
    </CourseWrapper>
  );
};

export default Course;
