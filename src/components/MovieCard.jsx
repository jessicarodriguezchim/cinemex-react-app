/**
 * Componente MovieCard - Tarjeta de película estilizada para Cinemex
 * Muestra poster, título y botón para ver detalles
 */
function MovieCard({ title, image, onVerDetalles }) {
  return (
    <div style={{
      background: '#2D2D2D',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(231, 18, 53, 0.3)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
    }}
    >
      {/* Poster de la película */}
      <div style={{
        position: 'relative',
        height: '320px',
        overflow: 'hidden'
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        {/* Overlay en hover */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
        }} />
      </div>

      {/* Contenido */}
      <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '12px',
          lineHeight: 1.3
        }}>
          {title}
        </h3>

        <button 
          onClick={onVerDetalles}
          style={{
            background: '#E71235',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#C50E2C'
            e.target.style.transform = 'scale(1.02)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#E71235'
            e.target.style.transform = 'scale(1)'
          }}
        >
          Ver horarios
        </button>
      </div>
    </div>
  )
}

export default MovieCard
