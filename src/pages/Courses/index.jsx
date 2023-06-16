import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../../index";
import { courses } from "../../utils/data";
import Course from "./components/course";
import { CoursesWrapper } from "./index.styled";
import AnimatedPage from "../../components/AnimatedPage";

const Courses = observer(() => {
  const { basket } = useContext(Context);
  const handleAdd = (indexCourse) => {
    if (basket.products.indexOf(indexCourse) == -1) {
      basket.setProducts(
        [...basket.products, indexCourse].sort(function (a, b) {
          return a - b;
        })
      );
    }
    alert(basket.products);
  };
  return (
    <AnimatedPage>
      <CoursesWrapper>
        {courses.map((item, index) => (
          <Course
            image={item.image}
            header={item.header}
            description={item.description}
            price={item.price}
            index={index}
            handleAdd={() => handleAdd(index)}
          />
        ))}
      </CoursesWrapper>
    </AnimatedPage>
  );
});

export default Courses;
