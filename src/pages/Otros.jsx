import PromoCard from '../components/PromoCard'

/**
 * Página Otros - Cinemex
 * Muestra promociones, membresías, preventas y formatos especiales
 */
function Otros() {
  const promociones = [
    {
      id: 1,
      titulo: '2x1 en Boletos',
      descripcion: 'Todos los martes y miércoles. Presenta tu tarjeta de crédito participante.',
      imagen: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
      tipo: 'promocion',
      badge: '¡Aprovecha!'
    },
    {
      id: 2,
      titulo: 'Combo Cumpleañero',
      descripcion: 'En tu cumpleaños, llévate un combo mediano GRATIS presentando tu INE.',
      imagen: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400',
      tipo: 'promocion',
      badge: 'Gratis'
    }
  ]

  const membresias = [
    {
      id: 3,
      titulo: 'Club Cinemex',
      descripcion: 'Acumula puntos en cada compra y canjéalos por boletos, combos y más.',
      imagen: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400',
      tipo: 'membresia',
      badge: 'Premium'
    },
    {
      id: 4,
      titulo: 'Cinemex Platino',
      descripcion: 'Acceso exclusivo a salas VIP, asientos reclinables y servicio a tu lugar.',
      imagen: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400',
      tipo: 'membresia',
      badge: 'VIP'
    }
  ]

  const preventas = [
    {
      id: 5,
      titulo: 'Avatar 3',
      descripcion: 'Próximamente. Asegura tus boletos antes que nadie para el estreno.',
      imagen: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
      tipo: 'preventa',
      badge: 'Preventa'
    },
    {
      id: 6,
      titulo: 'Deadpool & Wolverine',
      descripcion: 'El crossover más esperado. ¡Compra tus boletos anticipados!',
      imagen: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400',
      tipo: 'preventa',
      badge: 'Estreno'
    }
  ]

  const formatos = [
    {
      id: 7,
      titulo: 'IMAX',
      descripcion: 'La experiencia cinematográfica más inmersiva. Pantalla gigante y sonido envolvente.',
      imagen: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400',
      tipo: 'formato',
      badge: 'Premium'
    },
    {
      id: 8,
      titulo: '4DX',
      descripcion: 'Siente la película con asientos con movimiento, viento, agua y aromas.',
      imagen: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
      tipo: 'formato',
      badge: '4D'
    }
  ]

  const renderSeccion = (titulo, items, icono) => (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#FFFFFF',
        marginBottom: '24px',
        paddingLeft: '16px',
        borderLeft: '4px solid #E71235'
      }}>
        {icono} {titulo}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {items.map(item => (
          <PromoCard
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
            tipo={item.tipo}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  )

  return (
    <div>
      {/* Header de página */}
      <div style={{
        background: 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
        padding: '48px 24px',
        textAlign: 'center',
        borderBottom: '3px solid #F8C008'
      }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '12px'
        }}>
          ✨ Más de Cinemex
        </h1>
        <p style={{
          color: '#B0B0B0',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Descubre promociones, membresías exclusivas, preventas y formatos especiales
        </p>
      </div>

      {/* Contenido */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        {renderSeccion('Promociones', promociones, '🎉')}
        {renderSeccion('Membresías', membresias, '⭐')}
        {renderSeccion('Preventas', preventas, '🎬')}
        {renderSeccion('Formatos Especiales', formatos, '🎥')}
      </div>

      {/* Banner CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #E71235 0%, #C50E2C 100%)',
        padding: '48px 24px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '16px'
        }}>
          ¿Listo para vivir la experiencia Cinemex?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.1rem',
          marginBottom: '24px'
        }}>
          Descarga nuestra app y obtén beneficios exclusivos
        </p>
        <button style={{
          background: '#F8C008',
          color: '#1A1A1A',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '30px',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}>
          Descargar App
        </button>
      </div>
    </div>
  )
}

export default Otros

