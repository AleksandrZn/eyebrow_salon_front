import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../index";
import { courses } from "../../utils/data";
import Input from "../Input";
import {
  BackBtn,
  BasketWrapper,
  BuyBtn,
  BuyFormWrapper,
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
import { useEffect } from "react";
import { handlePay } from "../../api/requests";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useInput } from "../../hooks/useInput";

const Basket = observer(() => {
  const [active, setActive] = useState(true);
  const { basket } = useContext(Context);
  const [data, setData] = useState(false);
  const email = useInput("", { max: 254, isEmail: true, isEmpty: true });
  const phone = useInput("", { max: 15, isPhone: true, isEmpty: true });
  const name = useInput("", { max: 50, isEmpty: true });
  const getResultPrice = () => {
    return basket.products.reduce((a, b) => a + courses[b].price, 0);
  };
  const description = {
    products: basket.products.map((item) => ({
      header: courses[item].header,
      price: courses[item].price,
    })),
    email: email.value,
    name: name.value,
    phone: phone.value,
    price: getResultPrice(),
  };
  useEffect(() => {
    if (data) {
    }
  }, [data]);

  const handleClear = () => {
    basket.setProducts([]);
    basket.setIsVisible(false);
  };
  const handleDelete = (item) => {
    let arr = basket.products;
    var index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice(index, 1);
    }
    basket.setProducts(arr);
    if (basket.products.length === 0) basket.setIsVisible(false);
  };

  return (
    <ModalWrapper>
      {active ? (
        <BasketWrapper>
          <CloseBtn onClick={() => basket.setIsVisible(false)}>
            Закрыть
          </CloseBtn>
          <CountProductsWrapper>
            <CountProducts>{`Выбранные товары: ${basket.products.length}`}</CountProducts>
            <ClearBtn onClick={() => handleClear()}>Очистить список</ClearBtn>
          </CountProductsWrapper>
          <ItemsWrapper>
            {basket.products.map((item) => (
              <Item>
                <ItemImage src={courses[item].image} />
                <ItemDescription>{courses[item].description}</ItemDescription>
                <ItemPrice>{`${courses[item].price} pуб.`}</ItemPrice>
                <ItemDeleteBtn onClick={() => handleDelete(item)}>
                  Удалить
                </ItemDeleteBtn>
              </Item>
            ))}
          </ItemsWrapper>
          <ResultWrapper>
            <ResultText>Итого: </ResultText>
            <ResultPrice>{`${getResultPrice()} pуб.`}</ResultPrice>
          </ResultWrapper>
          <BuyBtn onClick={() => setActive(false)}>Купить</BuyBtn>
        </BasketWrapper>
      ) : data ? (
        <BuyFormWrapper>
          <CloseBtn
            onClick={() => {
              basket.setIsVisible(false);
              basket.setProducts([]);
            }}
          >
            Закрыть
          </CloseBtn>
          <div>{`${name.value}, на почту ${email.value} выслана ссылка на оплату. Перейдите по ссылке и оплатите заказ.Если письмо не пришло, то проверте корректность введенной почты или повторите попытку оплаты позже. После успешной оплаты на почту ${email.value} будет выслан ваш заказ.`}</div>
        </BuyFormWrapper>
      ) : (
        <BuyFormWrapper>
          <BackBtn onClick={() => setActive(true)}>Назад</BackBtn>
          <Input
            validationError={email.textError}
            placeholder="Введите email"
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
          />
          <Input
            validationError={name.textError}
            placeholder="Введите имя"
            value={name.value}
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
          />
          <Input
            validationError={phone.textError}
            component={
              <PhoneInput
                сountry="RU"
                placeholder="Введите номер телефона"
                value={phone.value}
                onChange={(e) => phone.setValue(e)}
                onBlur={(e) => phone.onBlur(e)}
              />
            }
          />

          <BuyBtn
            onClick={() => {
              handlePay(description, setData);
            }}
          >
            Оплатить
          </BuyBtn>
        </BuyFormWrapper>
      )}
    </ModalWrapper>
  );
});

export default Basket;
