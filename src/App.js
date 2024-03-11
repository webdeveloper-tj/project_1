import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import LogIn from "./Components/LogIn";
import Baner from "./Components/Baner";
import SingleBook from "./Components/SingleBook";
import { useState } from "react";
function App() {
  const [titleName, setTitlename] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            path=""
            element={
              <>
                <Header setTitlename={setTitlename} />
                <Baner titleName={titleName} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/log_in" element={<LogIn />} />
          <Route path="/singlebook/:id" element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
