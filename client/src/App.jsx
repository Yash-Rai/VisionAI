import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
//<img src={logo} alt="logo" className="w-28 object-contain" />
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#f43f5e] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h1 className="w-50 text-[#030712] text-2xl font-bold text-left decoration-2 font-inter">
            VisionAI
          </h1>
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#111827] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
