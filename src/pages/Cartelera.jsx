import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import peliculas from "../peliculas.json"

function Cartelera() {
  const navigate = useNavigate()

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px"
      }}
    >
      <h2 style={{ color: "white", marginBottom: "24px" }}>
        🎬 Cartelera Completa
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px"
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
    </main>
  )
}

export default Cartelera
