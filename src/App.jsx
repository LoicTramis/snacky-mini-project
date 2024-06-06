import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  /*
    For prep time 5min base time + 10 sec per ingredient rounded  (+ random between 1 and 5 min ?)
  */
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<FormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
