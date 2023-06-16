import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: rgba(1, 1, 1, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;
export const BasketWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  display: block;
  border: 1px solid black;
  background-color: white;
`;
export const CountProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const CountProducts = styled.div``;
export const ClearBtn = styled.div`
  text-decoration: underline;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
export const ItemImage = styled.img`
  height: 95%;
  width: 50px;
`;
export const ItemDescription = styled.div`
  height: 95%;
`;
export const ItemPrice = styled.div`
  height: 95%;
`;
export const ItemDeleteBtn = styled.div`
  color: red;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ResultText = styled.div``;
export const ResultPrice = styled.div``;
export const BuyBtn = styled.div`
  color: orange;
`;
export const CloseBtn = styled.div`
  color: red;
`;
export const BuyFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const BackBtn = styled.div``;
