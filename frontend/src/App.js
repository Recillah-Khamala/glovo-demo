import React, { useEffect } from "react";
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

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoginModalOpen]);

  // Show login modal on top of current page if it's open
  const loginModal = isLoginModalOpen && (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden">
      <div className="h-full overflow-y-auto">
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
      <div className={isLoginModalOpen ? "overflow-hidden h-screen" : ""}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
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
