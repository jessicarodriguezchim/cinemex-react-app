import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"
import Flooter from "./components/Flooter"
import Privacidad from "./pages/Privacidad"
import Terminos from "./pages/Terminos"
import "./App.css"
import "./index.css"


// === IMPORTANTE: Importa los estilos de Swiper aquí también para asegurar que se vean ===
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>

      <Flooter />
    </div>
  )
}

export default App