import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { NavBar } from "./components/NavBar";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Container } from "./index.styled";
import { Footer } from "./components/Footer";
import { Scroll } from "./components/SmoothScroll";
//import Basket from "./components/Basket";
import DelayedFallback from "./components/DelayFallback";
import AppRouter from "./components/AppRouter";
import Scrollbar from "smooth-scrollbar";
import useScrollBlock from "./hooks/useScrollBlock";

const App = observer(() => {
  // const { basket } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { global } = useContext(Context);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [loading]);

  if (loading) {
    return <DelayedFallback />;
  }

  const handleScroll = () => {
    if (global.isOpenBurger) {
    } else {
    }
  };
  useEffect(() => {
    if (global.isOpenBurger) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [global.isOpenBurger]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          onScrole={() => true}
          path="*"
          element={
            <Container>
              <NavBar />
              {/* {basket.isVisible && <Basket />} */}
              <Scroll />
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
