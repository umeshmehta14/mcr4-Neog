import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import SingleForum from "./Pages/Single Forum/SingleForum";
import SideBar from "./Components/Sidebar/SideBar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlepost/:postId" element={<SingleForum />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
