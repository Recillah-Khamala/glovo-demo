import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Login from "./components/Login";
import EmailLoginForm from "./components/EmailLoginForm";
import CreatePassword from "./components/CreatePassword";
import CreateName from "./components/CreateName";
import HomePage from "./components/HomePage";
import { useAuth } from "./context/AuthContext";
import { useSelector } from "react-redux";

const AppContent = () => {
  const { isLoginModalOpen } = useAuth();
  const currentLoginView = useSelector((state) => state.login.currentView);
  console.log("Current login view:", currentLoginView);

  // Show login modal on top of current page if it's open
  const loginModal = isLoginModalOpen && (
    <div
      className={`fixed inset-0 z-50 bg-white ${
        currentLoginView === "login" ? "overflow-y-auto" : ""
      }`}
    >
      <div className="min-h-screen">
        {currentLoginView === "email" ? (
          <EmailLoginForm />
        ) : currentLoginView === "create-password" ? (
          <CreatePassword />
        ) : currentLoginView === "create-name" ? (
          <CreateName />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );

  return (
    <>
      {loginModal}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

// Render the main layout
const MainLayout = () => (
  <div className={`min-h-screen flex flex-col`}>
    <main className="flex-grow">
      <Address />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return <AppContent />;
};

export default App;
