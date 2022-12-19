import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import "./scss/app.scss";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <Header search={search} setSearch={setSearch}></Header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Main search={search} />} />
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
