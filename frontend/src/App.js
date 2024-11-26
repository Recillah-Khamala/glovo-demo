import React from "react";
import UserProfileSection from "./components/UserProfileSection/UserProfileSection";
import Modal from "./components/Modal";
import Notification from "./components/Notification";
import MapView from "./components/MapView";

const App = () => {
  return (
    <div>
      <Notification />
      <UserProfileSection />
      <MapView />
      <Modal />
    </div>
  );
};

export default App;
