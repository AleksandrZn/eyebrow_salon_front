import { observer } from "mobx-react-lite";
import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import { appointmen } from "../../utils/data";
import Master from "./components/Master";
import { MastersWrapper } from "./index.styled";
import Message from "../../components/Message";

const Courses = observer(() => {
  return (
    <AnimatedPage>
      <MastersWrapper>
        {appointmen.map((item, index) => (
          <Master
            key={index}
            image={item.image}
            header={item.header}
            subHeader={item.subHeader}
            telegram={item.telegram}
            whatsapp={item.whatsapp}
            text={item.text}
            index={index === 0}
            srcs={item.srcs}
          />
        ))}
        {appointmen === [] && <Message />}
      </MastersWrapper>
    </AnimatedPage>
  );
});

export default Courses;
