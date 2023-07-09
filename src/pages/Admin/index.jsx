import React from "react";
import { Layout, Menu, Modal } from "antd";
import { useState } from "react";
import { InboxOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Space, Switch, Upload, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import MainBlock1 from "./components/MainBlock1";

const Admin = () => {
  const [data, setData] = useState({
    courses: [
      {
        image: "http://localhost:5000/course1.png",
        header: `Заголовок`,
        text: "Figma ipsum component variant main layer. Device share subtract background team pencil hand select main.",
        srcs: [""],
        telegramLink: "",
        whatsappLink: "",
        price: "500р.",
      },
      {
        image: "http://localhost:5000/course2.png",
        header: `Заголовок`,
        text: "Figma ipsum component variant main layer. Device share subtract background team pencil hand select main.",
        srcs: [""],
        telegramLink: "",
        whatsappLink: "",
        price: "500р.",
      },
    ],
    main: [
      {
        image: "",
        header: "",
        text: "",
      },
      {
        image: "",
        header: "",
        text: "",
      },
      {
        image: "",
        header: "",
        text: "",
      },
      {
        image: "",
        header: "",
        text: "",
      },
    ],
    appointmen: [
      {
        image: "img/Course2.png",
        header: `Заголовок`,
        subHeader: "Мастер-визажист",
        text: "Figma ipsum component variant main layer. Device share subtract background team pencil hand select main.",
        srcs: [""],
        telegramLink: "",
        whatsappLink: "",
      },
    ],
    footer: ["", ""],
    header: { src: "" },
  });

  useEffect(() => {
    return async function () {
      const response = await axios.get("http://localhost:5000/api/data");
      console.log("Response", response.data.response.main[0]);
      setData(response.data.response);
    };
  }, []);

  const { Header, Content } = Layout;
  const pages = ["Главная", "Запись", "Курсы"];
  const [active, setActive] = useState(1);

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          onClick={(e) => setActive(e.key)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={pages.map((item, index) => {
            const key = index + 1;
            return {
              key,
              label: ` ${item}`,
            };
          })}
        />
        <div style={{ padding: "0 5px", color: "white" }}>
          Редактирование
          <Switch style={{ margin: "0 5px" }} />
        </div>
      </Header>
      <Content
        style={{
          padding: "5px",
        }}
      >
        {active == 1 && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MainBlock1 data={data} />
            <div>
              <p>Блок 2</p>
            </div>
            <div>
              <p>Блок 3</p>
            </div>
            <div>
              <p>Блок 4</p>
            </div>
          </div>
        )}
        {active == 2 && 2}
        {active == 3 && 3}
      </Content>
    </Layout>
  );
};

export default Admin;
