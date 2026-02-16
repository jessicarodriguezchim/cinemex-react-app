/**
 * Componente FoodCard para mostrar alimentos
 * Usado en la sección de Alimentos (bebidas, comestibles, snacks)
 */
function FoodCard({ nombre, descripcion, precio, imagen, categoria }) {
  return (
    <div style={{
      background: '#2D2D2D',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
    }}
    >
      {/* Imagen del producto */}
      <div style={{
        position: 'relative',
        height: '180px',
        overflow: 'hidden'
      }}>
        <img
          src={imagen}
          alt={nombre}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Badge de categoría */}
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: categoria === 'Bebidas' ? '#E71235' : 
                      categoria === 'Snacks' ? '#F8C008' : '#4A4A4A',
          color: categoria === 'Snacks' ? '#1A1A1A' : '#FFFFFF',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          {categoria}
        </span>
      </div>

      {/* Contenido */}
      <div style={{ padding: '16px' }}>
        <h3 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '8px'
        }}>
          {nombre}
        </h3>
        
        <p style={{
          color: '#B0B0B0',
          fontSize: '0.9rem',
          marginBottom: '16px',
          lineHeight: 1.4
        }}>
          {descripcion}
        </p>

        {/* Precio y botón */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#F8C008'
          }}>
            ${precio}
          </span>
          
          <button style={{
            background: '#E71235',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#C50E2C'}
          onMouseLeave={(e) => e.target.style.background = '#E71235'}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard

