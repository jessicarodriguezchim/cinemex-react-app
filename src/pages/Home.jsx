import MovieCard from '../components/MovieCard'

/**
 * Página Home - Cinemex
 * Página principal con películas destacadas
 */
function Home({ cambiarVista }) {
  const peliculasDestacadas = [
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
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #E71235 0%, #C50E2C 50%, #1A1A1A 100%)',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración de fondo */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(248,192,8,0.15) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '3rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Bienvenido a <span style={{ color: '#F8C008' }}>CINEMEX</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.25rem',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.6
          }}>
            Vive la magia del cine con la mejor experiencia audiovisual
          </p>
          <button 
            onClick={() => cambiarVista('cartelera')}
            style={{
              background: '#F8C008',
              color: '#1A1A1A',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '30px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(248,192,8,0.4)'
            }}
          >
            Ver Cartelera Completa
          </button>
        </div>
      </section>

      {/* Películas Destacadas */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '32px',
          paddingLeft: '16px',
          borderLeft: '4px solid #E71235'
        }}>
          🎬 Películas en Cartelera
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {peliculasDestacadas.map(pelicula => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.title}
              image={pelicula.image}
              onVerDetalles={() => cambiarVista('detalle')}
            />
          ))}
        </div>
      </section>

      {/* Banner Promocional */}
      <section style={{
        background: '#2D2D2D',
        padding: '48px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px'
        }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <span style={{
              background: '#F8C008',
              color: '#1A1A1A',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif"
            }}>
              PROMOCIÓN
            </span>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginTop: '16px',
              marginBottom: '12px'
            }}>
              Martes y Miércoles de 2x1
            </h3>
            <p style={{
              color: '#B0B0B0',
              fontSize: '1.1rem',
              marginBottom: '24px'
            }}>
              Presenta tu tarjeta de crédito participante y disfruta del cine en pareja
            </p>
            <button 
              onClick={() => cambiarVista('otros')}
              style={{
                background: '#E71235',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Ver todas las promociones
            </button>
          </div>
          <div style={{
            fontSize: '6rem',
            opacity: 0.3
          }}>
            🎟️
          </div>
        </div>
      </section>

      {/* Sección rápida de accesos */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {[
            { icon: '🍿', label: 'Alimentos', vista: 'alimentos' },
            { icon: '⭐', label: 'Club Cinemex', vista: 'otros' },
            { icon: '🎬', label: 'Preventas', vista: 'otros' },
            { icon: '🎥', label: 'IMAX & 4DX', vista: 'otros' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => cambiarVista(item.vista)}
              style={{
                background: 'linear-gradient(145deg, #2D2D2D, #1A1A1A)',
                border: '1px solid #3A3A3A',
                borderRadius: '12px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E71235'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3A3A3A'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>
                {item.icon}
              </span>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                color: '#FFFFFF',
                fontSize: '1rem'
              }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
