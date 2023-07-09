import { observer } from "mobx-react-lite";
import React from "react";
import AnimatedPage from "../../components/AnimatedPage";
import { courses } from "../../utils/data";
import Course from "./components/course";
import { CoursesWrapper } from "./index.styled";
import Message from "../../components/Message";

const Courses = observer(() => {
  return (
    <AnimatedPage>
      <CoursesWrapper>
        {courses.map((item, index) => (
          <Course
            key={index}
            image={item.image}
            header={item.header}
            description={item.description}
            price={item.price}
            text={item.text}
            index={index === 0}
            srcs={item.srcs}
            telegram={item.telegram}
            whatsapp={item.whatsapp}
          />
        ))}
        {courses === [] && <Message />}
      </CoursesWrapper>
    </AnimatedPage>
  );
});

export default Courses;
