import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;