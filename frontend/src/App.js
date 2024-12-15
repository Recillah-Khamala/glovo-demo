import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import TransportPickupSection from "./components/TransportPickupSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<TransportPickupSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
