// <--------------------- REACT IMPORTS --------------------->
import { BrowserRouter, Routes, Route } from "react-router-dom";
// <--------------------- SCSS IMPORTS --------------------->
import "./App.scss";
// <--------------------- COMPONENT IMPORTS --------------------->
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":videoId" element={<HomePage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
