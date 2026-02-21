import { useState } from "react"

function Otros() {
  // useState para mostrar/ocultar detalles de cada sección
  const [seccionActiva, setSeccionActiva] = useState("promociones")

  // Datos de promociones
  const promociones = [
    { id: 1, titulo: "2x1 en Boletos", descripcion: "Martes y miércoles con tarjeta participante" },
    { id: 2, titulo: "Combo Cumpleañero", descripcion: "Combo gratis en tu cumpleaños con INE" }
  ]

  // Datos de membresías
  const membresias = [
    { id: 1, titulo: "Club Cinemex", descripcion: "Acumula puntos y canjéalos por boletos" },
    { id: 2, titulo: "Cinemex Platino", descripcion: "Acceso a salas VIP con servicio a tu lugar" }
  ]

  // Datos de preventas
  const preventas = [
    { id: 1, titulo: "Avatar 3", descripcion: "Próximamente - Asegura tus boletos" },
    { id: 2, titulo: "Avengers 5", descripcion: "Estreno exclusivo - Preventa disponible" }
  ]

  // Datos de formatos especiales
  const formatos = [
    { id: 1, titulo: "IMAX", descripcion: "Pantalla gigante y sonido envolvente" },
    { id: 2, titulo: "4DX", descripcion: "Asientos con movimiento, viento y aromas" }
  ]

  // Función para obtener los datos según la sección activa
  function obtenerDatos() {
    switch (seccionActiva) {
      case "promociones": return promociones
      case "membresias": return membresias
      case "preventas": return preventas
      case "formatos": return formatos
      default: return []
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


