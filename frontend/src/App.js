import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Login from "./components/Login";
import EmailLoginForm from "./components/EmailLoginForm";
import CreatePassword from "./components/CreatePassword";
import CreateName from "./components/CreateName";
import { useAuth } from "./context/AuthContext";
import { useSelector } from "react-redux";

const AppContent = () => {
  const { isLoginModalOpen } = useAuth();
  const currentLoginView = useSelector((state) => state.login.currentView);
  console.log("Current login view:", currentLoginView);

  // Render the main layout
  const MainLayout = () => (
    <div
      className={`min-h-screen flex flex-col ${
        isLoginModalOpen ? "overflow-hidden" : ""
      }`}
    >
      <Header />
      <main className="flex-grow">
        <Address />
      </main>
      <Footer />
    </div>
  );

  // Show login modal on top of current page if it's open
  if (isLoginModalOpen) {
    console.log("Login modal is open");
    return (
      <>
        <div className="fixed inset-0 overflow-hidden">
          <MainLayout />
        </div>
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
      </>
    );
  }

  // Regular routing when login modal is closed
  return (
    <Routes>
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
};

function App() {
  return <AppContent />;
}

export default App;
