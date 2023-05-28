import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Plays from "./Components/Plays";
import Map from "./Components/Map";
import Actors from "./Components/Actors";
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="plays" element={<Plays />} />
              <Route path="actors" element={<Actors />} />
              <Route path="map" element={<Map />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </AuthProvider>

  );
}

export default App;
