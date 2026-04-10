import { useState } from "react"
import alimentos from "../data/alimentos.json"

function Alimentos() {
  const [categoria, setCategoria] = useState("todos")

  // filtro por categoría
  const alimentosFiltrados = categoria === "todos"
    ? alimentos
    : alimentos.filter((item) => item.categoria === categoria)

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px",
        color: "white"
      }}
    >
      <h2 style={{ marginBottom: "24px" }}>🍿 Alimentos</h2>

      {/* Filtros con onChange */}
      <div style={{ marginBottom: "24px" }}>
        <label>Filtrar por categoría: </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            marginLeft: "8px"
          }}
        >
          <option value="todos">Todos</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Comestibles">Comestibles</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>

      {/* Grid de alimentos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px"
        }}
      >
        {alimentosFiltrados.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#2d2d2d",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center"
            }}
          >
            <h3>{item.nombre}</h3>
            <p style={{ color: "#F8C008", fontSize: "1.2rem" }}>
              ${item.precio}
            </p>
            <span
              style={{
                backgroundColor: "#444",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "0.8rem"
              }}
            >
              {item.categoria}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Alimentos
