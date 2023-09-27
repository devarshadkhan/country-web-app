import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import CountryPage from "./pages/CountryPage";
import Loader from "./components/Loader";

function App() {


  return (
    <>
     <BrowserRouter>
     <Header />
     {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/country/:id" element={<CountryPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
