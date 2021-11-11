import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Asteriod from "./components/Asteriod";
import AsteroidDetails from "./components/AsteroidDetails";
import RandomAsteroid from "./components/RandomAsteroid";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Asteriod />}></Route>
          <Route
            path="/asteroid/:asteroidId"
            element={<AsteroidDetails />}
          ></Route>
          <Route path="/asteroid/random" element={<RandomAsteroid />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
