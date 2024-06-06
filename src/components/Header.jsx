import Navbar from "./Navbar";
import SnackyLogo from "/src/assets/snacky.svg";
import "./Header.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FormPage from "./FormPage";
import ErrorPage from "../Pages/ErrorPage";

function Header() {
  return (
    <header className="Header">
      <section className="logoTitle">
        <img src={SnackyLogo} alt="Snacky logo" width={48} />
        <h1>Snacky</h1>
      </section>
      <Navbar />
    </header>
  );
}

export default Header;
