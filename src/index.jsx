import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./index.styled";
import GlobalStore from "./store/GlobalStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
  <Context.Provider
    value={{
      global: new GlobalStore(),
    }}
  >
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Context.Provider>
);
