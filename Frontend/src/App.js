import React from "react";
import { Routes, Route } from "react-router-dom";
import Lobby from "./Screens/Lobby";
import RoomPage from "./Screens/RoomPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </>
  );
};

export default App;
