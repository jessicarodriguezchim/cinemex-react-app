/**
 * Componente PromoCard para mostrar promociones, membresías, etc.
 * Usado en la sección "Otros"
 */
function PromoCard({ titulo, descripcion, imagen, tipo, badge }) {
  const getBadgeStyle = () => {
    switch(tipo) {
      case 'promocion':
        return { background: '#F8C008', color: '#1A1A1A' }
      case 'membresia':
        return { background: '#E71235', color: '#FFFFFF' }
      case 'preventa':
        return { background: '#9B59B6', color: '#FFFFFF' }
      case 'formato':
        return { background: '#3498DB', color: '#FFFFFF' }
      default:
        return { background: '#4A4A4A', color: '#FFFFFF' }
    }
  }

  const badgeStyle = getBadgeStyle()

  return (
    <div style={{
      background: 'linear-gradient(145deg, #2D2D2D 0%, #1A1A1A 100%)',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      border: '1px solid #3A3A3A'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(231, 18, 53, 0.2)'
      e.currentTarget.style.borderColor = '#E71235'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
      e.currentTarget.style.borderColor = '#3A3A3A'
    }}
    >
      {/* Imagen */}
      <div style={{
        position: 'relative',
        height: '160px',
        overflow: 'hidden'
      }}>
        <img
          src={imagen}
          alt={titulo}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Overlay gradiente */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
        }} />
        
        {/* Badge */}
        {badge && (
          <span style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: badgeStyle.background,
            color: badgeStyle.color,
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            {badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '10px'
        }}>
          {titulo}
        </h3>
        
        <p style={{
          color: '#B0B0B0',
          fontSize: '0.9rem',
          marginBottom: '16px',
          lineHeight: 1.5
        }}>
          {descripcion}
        </p>

        <button style={{
          background: 'transparent',
          color: '#F8C008',
          border: '2px solid #F8C008',
          padding: '10px 20px',
          borderRadius: '8px',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          width: '100%'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#F8C008'
          e.target.style.color = '#1A1A1A'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent'
          e.target.style.color = '#F8C008'
        }}
        >
          Ver más
        </button>
      </div>
    </div>
  )
}

export default PromoCard

