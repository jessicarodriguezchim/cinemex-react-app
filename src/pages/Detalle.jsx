import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import peliculas from "../data/peliculas.json"

function Detalle() {
  const navigate = useNavigate()
  const { id } = useParams()
  const pelicula = peliculas.find((item) => item.id === Number(id))

  // useState para el formulario controlado
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // Si la pelicula del id no existe
  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center", color: "white" }}>
        <h2>Pelicula no encontrada</h2>
        <p>Selecciona una pelicula valida desde la cartelera.</p>
        <button
          onClick={() => navigate("/cartelera")}
          style={{
            marginTop: "12px",
            padding: "10px 16px",
            backgroundColor: "#E71235",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Ir a cartelera
        </button>
      </main>
    )
  }

  // Evento onSubmit - Maneja el envío del formulario
  function manejarCompra(e) {
    e.preventDefault()

    // Mostrar mensaje de confirmación
    setMensaje(
      `¡Gracias ${nombre}! Compraste ${cantidadBoletos} boleto(s) para "${pelicula.titulo}"`
    )

    // Limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "white"
      }}
    >
      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p style={{ marginBottom: "24px" }}>{pelicula.descripcion}</p>

      <hr style={{ margin: "24px 0", borderColor: "#444" }} />

      <h3>🎟️ Comprar Boletos</h3>

      {/* Formulario controlado con onSubmit */}
      <form onSubmit={manejarCompra}>
        {/* Input nombre con onChange */}
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "4px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
            required
          />
        </div>

        {/* Input cantidad con onChange */}
        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(Number(e.target.value))}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "4px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
            required
          />
        </div>

        {/* Botón submit */}
        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#E71235",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Comprar
        </button>
      </form>

      {/* Mensaje de confirmación dinámico */}
      {mensaje && (
        <p
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#4CAF50",
            borderRadius: "4px",
            color: "white"
          }}
        >
          ✅ {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalle
