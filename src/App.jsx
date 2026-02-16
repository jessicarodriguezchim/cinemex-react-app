import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detalle from './pages/Detalle'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'

/**
 * Componente principal de la aplicación Cinemex
 * Maneja la navegación entre vistas y renderiza el contenido
 */
function App() {
  const [vistaActual, setVista] = useState("home")
  
  return (
    <div className="app-container">
      {/* Header con navegación */}
      <Header cambiarVista={setVista} vistaActual={vistaActual} />
      
      {/* Contenido principal - Renderizado condicional */}
      <main className="main-content">
        {vistaActual === "home" && <Home cambiarVista={setVista} />}
        {vistaActual === "cartelera" && <Cartelera cambiarVista={setVista} />}
        {vistaActual === "detalle" && <Detalle cambiarVista={setVista} />}
        {vistaActual === "alimentos" && <Alimentos />}
        {vistaActual === "otros" && <Otros />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">CINEMEX</div>
        <p>© 2026 Cinemex. Todos los derechos reservados.</p>
        <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>
          La mejor experiencia de cine en México
        </p>
      </footer>
    </div>
  )
}

export default App
