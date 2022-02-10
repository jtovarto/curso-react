import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Transition01 from "./components/Transition01";
import Transition02 from "./components/Transition02";
import Transition03 from "./components/Transition03";
import Transition04 from "./components/Transition04";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header className="p-4 border-bottom">
          <Navbar />
        </header>
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Transition01 />} />
            <Route path="/ccs-transition" element={<Transition02 />} />
            <Route path="/switch-transition" element={<Transition03 />} />
            <Route path="/transition-group" element={<Transition04 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
