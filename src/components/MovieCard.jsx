import { useState } from "react"
import Button from "./Button"

function MovieCard({ title, image, onVerDetalle }) {
  // ========== useState para mostrar/ocultar descripción ==========
  const [mostrarInfo, setMostrarInfo] = useState(false)

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#2d2d2d"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3 style={{ color: "white", marginBottom: "8px" }}>{title}</h3>
        
        {/* Botón para mostrar/ocultar info - Interacción dinámica */}
        <button
          onClick={() => setMostrarInfo(!mostrarInfo)}
          style={{
            background: "transparent",
            border: "none",
            color: "#F8C008",
            cursor: "pointer",
            marginBottom: "8px",
            fontSize: "0.9rem"
          }}
        >
          {mostrarInfo ? "▲ Ocultar info" : "▼ Ver info"}
        </button>

        {/* Información que se muestra/oculta dinámicamente */}
        {mostrarInfo && (
          <p style={{ 
            color: "#aaa", 
            fontSize: "0.85rem", 
            marginBottom: "12px",
            padding: "8px",
            backgroundColor: "#1a1a1a",
            borderRadius: "4px"
          }}>
            Película disponible en todas las salas. Consulta horarios.
          </p>
        )}

        <Button text="Ver horarios" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default MovieCard
