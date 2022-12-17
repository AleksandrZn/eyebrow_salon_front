import React from "react";
import {
  BlockWrapper,
  Button,
  Header,
  Image1,
  Image2,
  Image3,
  InfoWrapper,
  NextButton,
  Text,
} from "./index.styled";

const Main = () => {
  return (
    <>
      <BlockWrapper>
        <div>
          <Image1 src="img/Photo1.jpg" />
          <Image2 src="img/Photo2.jpg" />
        </div>
        <InfoWrapper>
          <Header>Нужен заголовок</Header>
          <Text>
            Сюда нужно что-то к записи. А то я не знаю как заполнить, не шарю в
            бровях
          </Text>
          <Button>ЗАПИСАТЬСЯ</Button>
          <NextButton>
            <img src="img/Next.svg" />
          </NextButton>
        </InfoWrapper>
      </BlockWrapper>
      <BlockWrapper>
        <InfoWrapper left>
          <Header>Обучающие курсы</Header>
          <Text>
            Сюда нужно что-то к записи. А то я не знаю как заполнить, не шарю в
            бровях
          </Text>
          <Button>ПОСМОТРЕТЬ</Button>
        </InfoWrapper>
        <Image3 src="img/Photo3.jpg" />
      </BlockWrapper>
    </>
  );
};

export default Main;
