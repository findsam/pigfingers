import * as React from "react";
import "./App.css";
import Game from "./Components/Container/Game";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Game />
      </div>
      <Footer />
    </div>
  );
}
