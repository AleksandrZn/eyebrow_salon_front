import "antd/dist/antd.css";
import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Scroll } from "./components/SmoothScroll";
import { Container } from "./index.styled";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import AppRouter from "./components/AppRouter";


const App = observer(() => {

  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
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
