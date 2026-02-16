import { useState } from 'react'

/**
 * Componente Header de Cinemex
 * Navegación principal con menú responsivo
 */
function Header({ cambiarVista, vistaActual }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'cartelera', label: 'Cartelera' },
    { id: 'alimentos', label: 'Alimentos' },
    { id: 'otros', label: 'Más' }
  ]

  const handleNavClick = (vista) => {
    cambiarVista(vista)
    setMenuAbierto(false)
  }

  return (
    <header style={{
      background: 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
      borderBottom: '3px solid #E71235',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '1.75rem',
            color: '#E71235',
            letterSpacing: '-1px'
          }}>
            CINEMEX
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav style={{
          display: 'flex',
          gap: '8px'
        }}
        className="nav-desktop"
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: vistaActual === item.id ? '#E71235' : 'transparent',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (vistaActual !== item.id) {
                  e.target.style.background = '#4A4A4A'
                }
              }}
              onMouseLeave={(e) => {
                if (vistaActual !== item.id) {
                  e.target.style.background = 'transparent'
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="menu-toggle"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div 
          className="mobile-menu"
          style={{
            background: '#2D2D2D',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: vistaActual === item.id ? '#E71235' : '#4A4A4A',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 20px',
                borderRadius: '8px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
