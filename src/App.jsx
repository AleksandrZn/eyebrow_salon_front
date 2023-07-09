import "antd/dist/antd.css";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Scroll } from "./components/SmoothScroll";
import { Container } from "./index.styled";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import AppRouter from "./components/AppRouter";
import Admin from "./pages/Admin";
import { Context } from ".";
import axios from "axios";
import { useContext } from "react";

const App = observer(() => {
  const { global } = useContext(Context);
  useEffect(() => {
    return async function () {
      const response = await axios.get("http://localhost:5000/api/data");
      global.setData(response.data.response);
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          {/* <Route
            onScrole={() => true}
            path="/17291fe4fd503a002e7ab3aa250b5968c31bfbdb"
            element={<Admin />}
          /> */}
          <Route
            onScrole={() => true}
            path="*"
            element={
              <Container>
                <NavBar />
                <Scroll />
                <AppRouter />
                <Footer />
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
});

export default App;
