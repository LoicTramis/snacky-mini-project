import React from "react";
import Navbar from "./Navbar";
import SnackyLogo from "/src/assets/snacky.svg";
import "./Header.css";

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
