// <--------------------- REACT IMPORTS --------------------->
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// <--------------------- SCSS IMPORTS --------------------->
import "./App.scss";

// <--------------------- COMPONENT IMPORTS --------------------->
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};

export default App;
