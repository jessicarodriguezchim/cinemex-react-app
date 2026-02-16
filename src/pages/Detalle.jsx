/**
 * Página Detalle - Cinemex
 * Muestra información detallada de una película y horarios
 */
function Detalle({ cambiarVista }) {
  const horarios = ['14:30', '16:45', '19:00', '21:15', '23:30']
  const formatos = ['2D', '3D', 'IMAX', '4DX']

  return (
    <div>
      {/* Header con imagen de fondo */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(26,26,26,0.3) 0%, #1A1A1A 100%), url("https://image.tmdb.org/t/p/original/j9mH1pr3IahtraTWxVEMANmPSGR.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        padding: '80px 24px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          {/* Poster */}
          <img
            src="https://image.tmdb.org/t/p/w500/j9mH1pr3IahtraTWxVEMANmPSGR.jpg"
            alt="Five Nights At Freddys"
            style={{
              width: '200px',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
            }}
          />
          
          {/* Info básica */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{
                background: '#E71235',
                color: '#FFFFFF',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                Terror
              </span>
              <span style={{
                background: '#4A4A4A',
                color: '#FFFFFF',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}>
                1h 50min
              </span>
              <span style={{
                background: '#4A4A4A',
                color: '#FFFFFF',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}>
                B-15
              </span>
            </div>
            
            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '12px'
            }}>
              Five Nights At Freddy's
            </h1>
            
            <p style={{
              color: '#B0B0B0',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              Un guardia de seguridad recién contratado en Freddy Fazbear's Pizza 
              descubre que el turno de noche no será tan fácil de sobrevivir.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        {/* Selección de formato */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Selecciona formato
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {formatos.map((formato, index) => (
              <button
                key={formato}
                style={{
                  background: index === 0 ? '#E71235' : '#2D2D2D',
                  color: '#FFFFFF',
                  border: '2px solid',
                  borderColor: index === 0 ? '#E71235' : '#4A4A4A',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {formato}
              </button>
            ))}
          </div>
        </section>

        {/* Horarios */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Horarios disponibles - Hoy
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {horarios.map(horario => (
              <button
                key={horario}
                style={{
                  background: '#2D2D2D',
                  color: '#FFFFFF',
                  border: '2px solid #4A4A4A',
                  padding: '16px 24px',
                  borderRadius: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#F8C008'
                  e.target.style.color = '#F8C008'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#4A4A4A'
                  e.target.style.color = '#FFFFFF'
                }}
              >
                {horario}
              </button>
            ))}
          </div>
        </section>

        {/* Sinopsis */}
        <section style={{
          background: '#2D2D2D',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Sinopsis
          </h2>
          <p style={{
            color: '#B0B0B0',
            fontSize: '1rem',
            lineHeight: 1.7
          }}>
            Después de aceptar un trabajo como guardia de seguridad nocturno en Freddy 
            Fazbear's Pizza, un hombre perturbado descubre que los animatrónicos del 
            lugar cobran vida por la noche. Mientras lucha por sobrevivir cinco noches 
            aterradoras, también debe enfrentarse a los oscuros secretos de su pasado 
            que están conectados con el restaurante y sus siniestros habitantes mecánicos.
          </p>
        </section>

        {/* Botón de regreso */}
        <button
          onClick={() => cambiarVista('cartelera')}
          style={{
            background: 'transparent',
            color: '#F8C008',
            border: '2px solid #F8C008',
            padding: '14px 28px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← Volver a Cartelera
        </button>
      </div>
    </div>
  )
}

export default Detalle
