import { useState } from 'react'
import FoodCard from '../components/FoodCard'

/**
 * Página de Alimentos - Cinemex
 * Muestra bebidas, comestibles y snacks organizados por categoría
 */
function Alimentos() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')

  const alimentos = [
    // Bebidas
    {
      id: 1,
      nombre: 'Refresco Grande',
      descripcion: 'Coca-Cola, Sprite, Fanta o Agua mineral. Incluye refill ilimitado.',
      precio: 75,
      imagen: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400',
      categoria: 'Bebidas'
    },
    {
      id: 2,
      nombre: 'ICEE Mediano',
      descripcion: 'Bebida congelada sabor cereza, uva o blue raspberry.',
      precio: 65,
      imagen: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400',
      categoria: 'Bebidas'
    },
    {
      id: 3,
      nombre: 'Café Americano',
      descripcion: 'Café recién preparado, caliente o frío. Tamaño regular.',
      precio: 55,
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
      categoria: 'Bebidas'
    },
    // Comestibles
    {
      id: 4,
      nombre: 'Palomitas Grandes',
      descripcion: 'Palomitas de maíz recién hechas con mantequilla. Tamaño grande.',
      precio: 95,
      imagen: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400',
      categoria: 'Comestibles'
    },
    {
      id: 5,
      nombre: 'Hot Dog Jumbo',
      descripcion: 'Salchicha jumbo con pan suave, incluye aderezos.',
      precio: 85,
      imagen: 'https://images.unsplash.com/photo-1612392062631-94e8a1ed8e68?w=400',
      categoria: 'Comestibles'
    },
    {
      id: 6,
      nombre: 'Nachos con Queso',
      descripcion: 'Totopos crujientes con queso cheddar derretido y jalapeños.',
      precio: 90,
      imagen: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400',
      categoria: 'Comestibles'
    },
    // Snacks
    {
      id: 7,
      nombre: 'M&Ms',
      descripcion: 'Chocolates con cubierta de caramelo. Bolsa tamaño cine.',
      precio: 55,
      imagen: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=400',
      categoria: 'Snacks'
    },
    {
      id: 8,
      nombre: 'Gomitas Surtidas',
      descripcion: 'Mix de gomitas de frutas: ositos, gusanos y aros.',
      precio: 45,
      imagen: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400',
      categoria: 'Snacks'
    }
  ]

  const categorias = ['todos', 'Bebidas', 'Comestibles', 'Snacks']

  const alimentosFiltrados = categoriaActiva === 'todos' 
    ? alimentos 
    : alimentos.filter(a => a.categoria === categoriaActiva)

  return (
    <div>
      {/* Header de página */}
      <div style={{
        background: 'linear-gradient(135deg, #E71235 0%, #C50E2C 100%)',
        padding: '48px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '12px'
        }}>
          🍿 Alimentos
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Complementa tu experiencia de cine con nuestros deliciosos snacks y bebidas
        </p>
      </div>

      {/* Contenido */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 24px'
      }}>
        {/* Filtros de categoría */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              style={{
                background: categoriaActiva === cat ? '#E71235' : '#2D2D2D',
                color: '#FFFFFF',
                border: '2px solid',
                borderColor: categoriaActiva === cat ? '#E71235' : '#4A4A4A',
                padding: '12px 24px',
                borderRadius: '25px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize'
              }}
            >
              {cat === 'todos' ? '🎬 Todos' : 
               cat === 'Bebidas' ? '🥤 Bebidas' :
               cat === 'Comestibles' ? '🌭 Comestibles' : '🍬 Snacks'}
            </button>
          ))}
        </div>

        {/* Grid de alimentos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {alimentosFiltrados.map(alimento => (
            <FoodCard
              key={alimento.id}
              nombre={alimento.nombre}
              descripcion={alimento.descripcion}
              precio={alimento.precio}
              imagen={alimento.imagen}
              categoria={alimento.categoria}
            />
          ))}
        </div>

        {/* Combo destacado */}
        <div style={{
          marginTop: '48px',
          background: 'linear-gradient(135deg, #F8C008 0%, #D9A607 100%)',
          borderRadius: '16px',
          padding: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <span style={{
              background: '#E71235',
              color: '#FFFFFF',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif"
            }}>
              COMBO ESPECIAL
            </span>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#1A1A1A',
              marginTop: '12px',
              marginBottom: '8px'
            }}>
              Combo Familiar Cinemex
            </h3>
            <p style={{
              color: '#4A4A4A',
              fontSize: '1rem'
            }}>
              2 Palomitas grandes + 2 Refrescos grandes + 1 Nachos con queso
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#1A1A1A'
            }}>
              $199
            </p>
            <button style={{
              background: '#E71235',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '8px'
            }}>
              ¡Lo quiero!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alimentos

