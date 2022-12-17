import React from "react";
import {
  BasketWrapper,
  BuyBtn,
  ClearBtn,
  CloseBtn,
  CountProducts,
  CountProductsWrapper,
  Item,
  ItemDeleteBtn,
  ItemDescription,
  ItemImage,
  ItemPrice,
  ItemsWrapper,
  ModalWrapper,
  ResultPrice,
  ResultText,
  ResultWrapper,
} from "./index.styled";

const Basket = () => {
  return (
    <ModalWrapper>
      <BasketWrapper>
        <CloseBtn>Закрыть</CloseBtn>
        <CountProductsWrapper>
          <CountProducts>Выбранные товары: 4</CountProducts>
          <ClearBtn>Очистить список</ClearBtn>
        </CountProductsWrapper>
        <ItemsWrapper>
          <Item>
            <ItemImage>Картинка</ItemImage>
            <ItemDescription>блаалаллалалалала</ItemDescription>
            <ItemPrice>3456p.</ItemPrice>
            <ItemDeleteBtn>Удалить</ItemDeleteBtn>
          </Item>
        </ItemsWrapper>
        <ResultWrapper>
          <ResultText>Итого: </ResultText>
          <ResultPrice>4500p.</ResultPrice>
        </ResultWrapper>
        <BuyBtn>Купить</BuyBtn>
      </BasketWrapper>
    </ModalWrapper>
  );
};

export default Basket;
