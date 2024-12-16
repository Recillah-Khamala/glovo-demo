import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import TransportPickupSection from "./components/TransportPickupSection";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import AuthLanding from "./components/AuthLanding";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <Routes>
        <Route path="/auth" element={<AuthLanding />} />
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/register" element={<AuthForm isLogin={false} />} />
        <Route path="/" element={
          <ProtectedRoute>
            <TransportPickupSection />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
