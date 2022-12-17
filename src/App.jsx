import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { Spin, Alert } from "antd";
import { NavBar } from "./components/NavBar";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Container } from "./index.styled";
import { Footer } from "./components/Footer";
import { Scroll } from "./components/SmoothScroll";
import { ADMIN_ROUTE } from "./utils/consts";
import Admin from "./pages/Admin";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [loading]);

  if (loading) {
    return (
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ADMIN_ROUTE} element={<Admin />} />
        <Route
          path="*"
          element={
            <Container>
              <Scroll />
              <NavBar />
              <AppRouter />
              <Footer />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
});

export default App;
