import { useState } from "react"
import otrosData from "../data/otros.json"

function Otros() {
  const [seccionActiva, setSeccionActiva] = useState("promociones")

  function obtenerDatos() {
    switch (seccionActiva) {
      case "promociones":
        return otrosData.promociones
      case "membresias":
        return otrosData.membresias
      case "preventas":
        return otrosData.preventas
      case "formatos":
        return otrosData.formatos
      default:
        return []
    }
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px",
        color: "white"
      }}
    >
      <h2 style={{ marginBottom: "24px" }}>⭐ Más de Cinemex</h2>

      {/* Tabs de navegación con onClick */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        <button
          onClick={() => setSeccionActiva("promociones")}
          style={{
            padding: "10px 20px",
            backgroundColor: seccionActiva === "promociones" ? "#E71235" : "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          🎉 Promociones
        </button>
        <button
          onClick={() => setSeccionActiva("membresias")}
          style={{
            padding: "10px 20px",
            backgroundColor: seccionActiva === "membresias" ? "#E71235" : "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          ⭐ Membresías
        </button>
        <button
          onClick={() => setSeccionActiva("preventas")}
          style={{
            padding: "10px 20px",
            backgroundColor: seccionActiva === "preventas" ? "#E71235" : "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          🎬 Preventas
        </button>
        <button
          onClick={() => setSeccionActiva("formatos")}
          style={{
            padding: "10px 20px",
            backgroundColor: seccionActiva === "formatos" ? "#E71235" : "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          🎥 Formatos
        </button>
      </div>

      {/* Contenido dinámico según sección activa */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px"
        }}
      >
        {obtenerDatos().map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#2d2d2d",
              padding: "20px",
              borderRadius: "8px",
              borderLeft: "4px solid #F8C008"
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{item.titulo}</h3>
            <p style={{ color: "#aaa" }}>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Otros


