import React, { useContext } from "react";
import { Context } from "../../../../index";
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

const Course = ({ image, header, description, price, handleAdd }) => {
  const { basket } = useContext(Context);
  return (
    <CourseWrapper>
      <Image src={image} />
      <TextWrapper>
        <Header>{header}</Header>
        <DescriptionWrapper>
          <DescriptionBtn>Скрыть/Раскрыть</DescriptionBtn>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </TextWrapper>
      <Price>{price}</Price>
      <WrapperBtn>
        <AddBasketBtn onClick={handleAdd}>Добавить в корзину</AddBasketBtn>
        <BuyBtn
          onClick={() => {
            handleAdd();
            basket.setIsVisible(true);
          }}
        >
          Купить
        </BuyBtn>
      </WrapperBtn>
    </CourseWrapper>
  );
};

export default Course;
