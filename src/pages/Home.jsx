import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import peliculas from "../peliculas.json"

function Home({ verDetalle }) {
  // ========== useEffect + fetch para consumir API ==========
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Consumimos la API de JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setNoticias(datos)
        setCargando(false)
      })
  }, [])

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px"
      }}
    >
      <h2 style={{ color: "white", marginBottom: "24px" }}>
        🎬 Películas en Cartelera
      </h2>

      {/* Grid de películas - Datos del JSON local */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          marginBottom: "40px"
        }}
      >
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            onVerDetalle={() => verDetalle(pelicula)}
          />
        ))}
      </div>

      {/* ========== Sección de Noticias - Datos de API con fetch ========== */}
      <h2 style={{ color: "white", marginBottom: "16px" }}>
        📰 Noticias del Cine
      </h2>
      <p style={{ color: "#888", marginBottom: "16px", fontSize: "0.9rem" }}>
        * Datos cargados con useEffect + fetch desde JSONPlaceholder
      </p>

      {cargando ? (
        <p style={{ color: "white" }}>Cargando noticias...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px"
          }}
        >
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              style={{
                backgroundColor: "#2d2d2d",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #E71235"
              }}
            >
              <h4 style={{ color: "#F8C008", marginBottom: "8px" }}>
                Noticia #{noticia.id}
              </h4>
              <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                {noticia.body.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
