import React from "react";
import Header from "./components/Header";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";

const AppContent = () => {
  const { isLoginModalOpen } = useAuth();

  if (isLoginModalOpen) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Address />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
