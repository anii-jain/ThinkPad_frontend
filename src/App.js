import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message=" yo yo " />
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              {/* <Route exact path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
