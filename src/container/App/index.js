import React from "react";

import "./App.css";
import Articles from "../Articles";
import Article from "../Article";
import Nav from "../../components/Nav";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
      </Routes>
    </div>
  );
}

export default App;
