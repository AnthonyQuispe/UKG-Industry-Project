// import Home from "./Pages/Home/Home";
import Chatgpt from "./Components/ChatGpt/Chatgpt.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/chat" element={<Chatgpt />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
