import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import "./scss/app.scss";
export const SearchContext = React.createContext();

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <SearchContext.Provider value={{ search, setSearch }}>
            <Header></Header>
            <div className="content">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </SearchContext.Provider>
        </div>
      </body>
    </div>
  );
}

export default App;
