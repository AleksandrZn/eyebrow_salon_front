import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import GlobalStyles, { baseTheme } from "./index.styled";
import BasketStore from "./store/BasketStore";
import GlobalStore from "./store/GlobalStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      basket: new BasketStore(),
      global: new GlobalStore(),
    }}
  >
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Context.Provider>
);
