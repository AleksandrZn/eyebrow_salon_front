import React from "react";
import AuthForm from "./components/AuthForm";
import { AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { useState } from "react";
import Profile from "./components/Profile";
import Clients from "./components/Clients";
import Masters from "./components/Masters";
import Schedule from "./components/Schedule";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Личные данные", "1", <AppstoreOutlined />),
  getItem("Клиенты", "2", <AppstoreOutlined />),
  getItem("Мастера", "3", <AppstoreOutlined />),
  getItem("Записи", "4", <AppstoreOutlined />),
  getItem("Рабочий график", "5", <AppstoreOutlined />),
];

const componentsSwitch = (key) => {
  switch (key) {
    case "1":
      return <Profile />;
    case "2":
      return <Clients />;
    case "3":
      return <Masters />;
    case "4":
      return <div>4</div>;
    case "5":
      return <Schedule />;
    default:
      break;
  }
};

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  return true ? (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 16px",
          gap: "850px",

          position: "relative",
          width: "1919px",
          height: "48px",

          background: "#001529",
          /* border & divider/divider ↓ */

          boxShadow: "inset 0px -1px 0px #F0F0F0",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "8px 16px 8px 0px",
            gap: "12px",

            width: "161px",
            height: "48px",

            /* Inside auto layout */
            backgroundColor: "white",
            flex: "none",
            order: "0",
            alignSelf: "stretch",
            flexGrow: "0",
          }}
        />
        <div
          className="alert"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            padding: "12px",
            backgroundColor: "white",
            width: "48px",
            height: "48px",
          }}
        />
        <div
          className="name"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px 12px",

            width: "94px",
            height: "48px",
            backgroundColor: "white",
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
            onClick={(e) => setSelectedMenuItem(e.key)}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {componentsSwitch(selectedMenuItem)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ) : (
    <AuthForm />
  );
};

export default Admin;
