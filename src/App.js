// import Home from "./Pages/Home/Home";
import Chatgpt from "./components/ChatGpt/Chatgpt";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/chat" element={<Chatgpt />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
