import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import GlobalStyles, { baseTheme } from "./index.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
  <Context.Provider value={{ user: new UserStore() }}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Context.Provider>
);
