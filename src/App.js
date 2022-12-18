import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import "./scss/app.scss";
function App() {
  // https://639db24c1ec9c6657bb03671.mockapi.io/:endpoint

  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <Header></Header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/error" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
