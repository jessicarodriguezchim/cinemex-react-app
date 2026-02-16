/**
 * Componente Button reutilizable con estilos Cinemex
 * Soporta variantes: primary (rojo), secondary (dorado), outline
 */
function Button({ text, onClick, variant = 'primary', fullWidth = false }) {
  const getStyles = () => {
    const base = {
      padding: '12px 24px',
      borderRadius: '8px',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'inline-block',
      textAlign: 'center',
      width: fullWidth ? '100%' : 'auto'
    }

    switch(variant) {
      case 'primary':
        return {
          ...base,
          background: '#E71235',
          color: '#FFFFFF',
          border: 'none'
        }
      case 'secondary':
        return {
          ...base,
          background: '#F8C008',
          color: '#1A1A1A',
          border: 'none'
        }
      case 'outline':
        return {
          ...base,
          background: 'transparent',
          color: '#F8C008',
          border: '2px solid #F8C008'
        }
      default:
        return base
    }
  }

  const handleMouseEnter = (e) => {
    switch(variant) {
      case 'primary':
        e.target.style.background = '#C50E2C'
        break
      case 'secondary':
        e.target.style.background = '#D9A607'
        break
      case 'outline':
        e.target.style.background = '#F8C008'
        e.target.style.color = '#1A1A1A'
        break
    }
    e.target.style.transform = 'translateY(-2px)'
  }

  const handleMouseLeave = (e) => {
    switch(variant) {
      case 'primary':
        e.target.style.background = '#E71235'
        break
      case 'secondary':
        e.target.style.background = '#F8C008'
        break
      case 'outline':
        e.target.style.background = 'transparent'
        e.target.style.color = '#F8C008'
        break
    }
    e.target.style.transform = 'translateY(0)'
  }

  return (
    <button
      onClick={onClick}
      style={getStyles()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  )
}

export default Button
