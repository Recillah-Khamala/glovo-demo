import React from "react";
import Header from "./components/Header";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Address />
          <Login />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
