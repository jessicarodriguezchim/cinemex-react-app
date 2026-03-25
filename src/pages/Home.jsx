import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import MovieCarousel from "../components/MovieCarousel"
import peliculas from "../data/peliculas.json"
import { NEWS_POSTS_URL } from "../config/api"

function Home() {
  const navigate = useNavigate()
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch(NEWS_POSTS_URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setNoticias(datos)
        setCargando(false)
      })
  }, [])

  return (
    <>
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px"
        }}
      >
        {/* === PASO 1: SECCIÓN DE CARRUSEL (ESTRENOS) === */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "white", marginBottom: "16px" }}>⭐ ESTRENOS</h2>
          <MovieCarousel
            movies={peliculas}
            onVerDetalle={(pelicula) => navigate(`/pelicula/${pelicula.id}`)}
          />
        </section>

        <h2 style={{ color: "white", marginBottom: "24px" }}>
          🎬 Películas en Cartelera
        </h2>

        {/* Grid de películas */}
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
              onVerDetalle={() => navigate(`/pelicula/${pelicula.id}`)}
            />
          ))}
        </div>

        {/* Sección de Noticias */}
        <h2 style={{ color: "white", marginBottom: "16px" }}>
          📰 Noticias del Cine
        </h2>
        
        {cargando ? (
          <p style={{ color: "white" }}>Cargando noticias...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginBottom: "40px"
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

    </>
  )
}

export default Home