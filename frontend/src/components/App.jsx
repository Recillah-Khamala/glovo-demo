// src/components/App.jsx
import React from "react";
import UserProfileSection from "./UserProfileSection/UserProfileSection";
import Modal from "./Modal";
import Button from "./Button";
import Notification from "./Notification";
import MapView from "./MapView";
import "./App.css"; // Assuming you'll be styling here

const App = () => {
  return (
    <div className="App">
      <UserProfileSection />
      <Modal />
      <Button />
      <Notification />
      <MapView />
    </div>
  );
};

export default App;
