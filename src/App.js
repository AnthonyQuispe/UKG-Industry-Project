// import Home from "./Pages/Home/Home";
import Chatgpt from "./components/ChatGpt/Chatgpt";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chatgpt />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
