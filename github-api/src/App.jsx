import { useState } from "react";
import "./App.css";
import images from "./images/github-logo.png";
import Home from "./home.jsx";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
