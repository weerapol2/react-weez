import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./Button";
import Header from "./components/Header";
import React from "react";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Deshboard from "./pages/Deshboard";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <Header>
              <Button text="Login" />
            </Header>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/" element={<Deshboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
