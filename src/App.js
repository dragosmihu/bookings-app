
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Plays from "./Components/Plays";
import Map from "./Components/Map";
import Actors from "./Components/Actors";
import Footer from './Components/Footer';
import React from 'react';
import ShowDetails from './Components/ShowDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="plays" element={<Plays />} />
            <Route path="actors" element={<Actors />} />
            <Route path="map" element={<Map />} />
            <Route path="/show/:showId" element={<ShowDetails />} />
          </Route>
        </Routes>
    </BrowserRouter>
    <Footer />
    </div>

  );
}

export default App;
