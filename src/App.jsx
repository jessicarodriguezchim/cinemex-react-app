import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  // useState #1: Controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  // useState #2: Guarda la película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // Función para ir a detalle enviando datos de la película
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}>
      {/* Header controla navegación principal */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}

      {vistaActual === "alimentos" && (
        <Alimentos />
      )}

      {vistaActual === "otros" && (
        <Otros />
      )}
    </div>
  )
}

export default App
