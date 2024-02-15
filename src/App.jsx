import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.page";
import Contact from "./pages/contact.page";
import Entrance from "./pages/enterance.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
