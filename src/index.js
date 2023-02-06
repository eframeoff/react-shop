import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  );
}
