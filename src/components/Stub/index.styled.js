import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  & :nth-child(2) {
    margin-left: 10px;
    padding-left: 5px;
    border-left: 2px solid #151515;
  }
`;
