import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.page";
import Contact from "./pages/contact.page";
import Entrance from "./pages/enterance.page";
import FirstYear from "./pages/first.page";
import SecondYear from "./pages/second.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/first-year" element={<FirstYear />} />
          <Route path="/second-year" element={<SecondYear />} />
          <Route path="/third-year" element={<FirstYear />} />
          <Route path="/fourth-year" element={<FirstYear />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
