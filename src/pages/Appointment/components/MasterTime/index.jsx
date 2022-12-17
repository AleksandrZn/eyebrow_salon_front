import { Button } from "antd";
import React, { useState } from "react";
import {
  ContentWrapper,
  MasterTimeWrapper,
  Text,
  TimeWrapper,
} from "./index.styled";
import { TimePicker } from "antd";
import moment from "moment";

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const MasterTime = () => {
  return (
    <MasterTimeWrapper>
      <ContentWrapper width={382}>
        <Text>Ближайшее время для записи 19 июня, вторник</Text>
        <TimeWrapper>
          <Button>10:30</Button>
          <Button>10:30</Button>
          <Button>10:30</Button>
          <Button>10:30</Button>
          <Button>10:30</Button>
          <Button>10:30</Button>
          <Button>10:30</Button>
        </TimeWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <Text>Свое время</Text>
        <TimePicker
          onChange={onChange}
          defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
        />
      </ContentWrapper>
      <span>Записаться</span>
    </MasterTimeWrapper>
  );
};

export default MasterTime;
