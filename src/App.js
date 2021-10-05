import React from "react";
import Hero from "./pages/hero/Hero";
import Nav from "./pages/nav/Nav";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
    </div>
  );
};
export default App;
