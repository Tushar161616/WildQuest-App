import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import Safari from "./pages/Safari";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Route,Routes } from "react-router-dom";


function App() {
 

  return (
    <>
      <Header />

      <Routes>

        <Route path="/Home" element={ <Home />} />
        <Route path="/Tracking" element={ <Tracking />} />
        <Route path="/Safari" element={ <Safari />} />
        <Route path="/Services" element={ <Services />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

    
      <Footer />
    </>
  )
}

export default App
