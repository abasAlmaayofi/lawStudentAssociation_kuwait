import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.page";
import Contact from "./pages/contact.page";
import Entrance from "./pages/enterance.page";
import FirstYear from "./pages/first.page";
import SecondYear from "./pages/second.page";
import ThirdYear from "./pages/third.page";
import FourthYear from "./pages/fourth.page";
import Faculty from "./pages/faculty.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/first-year" element={<FirstYear />} />
          <Route path="/second-year" element={<SecondYear />} />
          <Route path="/third-year" element={<ThirdYear />} />
          <Route path="/fourth-year" element={<FourthYear />} />
          <Route path="/faculty-accounts" element={<Faculty />} />
          <Route path="/" element={<Entrance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
