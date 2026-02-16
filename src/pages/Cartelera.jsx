import MovieCard from '../components/MovieCard'

/**
 * Página Cartelera - Cinemex
 * Muestra todas las películas disponibles
 */
function Cartelera({ cambiarVista }) {
  const peliculas = [
    {
      id: 1,
      title: 'K-Pop Demon Hunters',
      image: 'https://www.lacuevadelnerd.com/wp-content/uploads/2025/10/guerreras-k-pop-2025-4355136.jpg-1536x864.webp'
    },
    {
      id: 2,
      title: 'Five Nights At Freddys',
      image: 'https://image.tmdb.org/t/p/w500/j9mH1pr3IahtraTWxVEMANmPSGR.jpg'
    },
    {
      id: 3,
      title: 'Angry Birds',
      image: 'https://imagenes.hobbyconsolas.com/files/image_1280_720/uploads/imagenes/2023/04/25/69013e172631a.jpeg'
    },
    {
      id: 4,
      title: 'Minecraft',
      image: 'https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg'
    },
    {
      id: 5,
      title: 'Spider-Man',
      image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
    },
    {
      id: 6,
      title: 'Dune: Parte Dos',
      image: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg'
    },
    {
      id: 7,
      title: 'Godzilla x Kong',
      image: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg'
    },
    {
      id: 8,
      title: 'Kung Fu Panda 4',
      image: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'
    }
  ]

  return (
    <div>
      {/* Header de página */}
      <div style={{
        background: 'linear-gradient(180deg, #2D2D2D 0%, #1A1A1A 100%)',
        padding: '48px 24px',
        textAlign: 'center',
        borderBottom: '3px solid #E71235'
      }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '12px'
        }}>
          🎬 Cartelera
        </h1>
        <p style={{
          color: '#B0B0B0',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Descubre todas las películas disponibles en nuestras salas
        </p>
      </div>

      {/* Contenido */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        {/* Info de ubicación */}
        <div style={{
          background: '#2D2D2D',
          borderRadius: '12px',
          padding: '16px 24px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>📍</span>
            <div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                color: '#FFFFFF',
                margin: 0
              }}>
                Cinemex Plaza Universidad
              </p>
              <p style={{ color: '#B0B0B0', fontSize: '0.9rem', margin: 0 }}>
                Ciudad de México
              </p>
            </div>
          </div>
          <button style={{
            background: 'transparent',
            border: '2px solid #F8C008',
            color: '#F8C008',
            padding: '10px 20px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Cambiar ubicación
          </button>
        </div>

        {/* Grid de películas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {peliculas.map(pelicula => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              onVerDetalles={() => cambiarVista('detalle')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cartelera
