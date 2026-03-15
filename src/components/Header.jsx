import { Link, NavLink } from "react-router-dom"

function Header() {
  const colors = {
    rojo: "#E71235",
    amarillo: "#F8C008",
    negro: "#1a1a1a",
    blanco: "#ffffff"
  }

  const baseLinkStyle = {
    textDecoration: "none",
    color: colors.blanco,
    paddingBottom: "2px"
  }

  const getLinkStyle = ({ isActive }) => ({
    ...baseLinkStyle,
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? `2px solid ${colors.amarillo}` : "2px solid transparent",
    color: isActive ? colors.amarillo : colors.blanco
  })

  return (
    <header
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: colors.rojo
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: colors.blanco }}>
            CINEMEX
          </Link>
        </h1>

        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "flex-end" }}>
          <NavLink to="/" end style={getLinkStyle}>Inicio</NavLink>
          <NavLink to="/cartelera" style={getLinkStyle}>Cartelera</NavLink>
          <NavLink to="/alimentos" style={getLinkStyle}>Alimentos</NavLink>
          <NavLink to="/otros" style={getLinkStyle}>Otros</NavLink>
          <NavLink to="/privacidad" style={getLinkStyle}>Privacidad</NavLink>
          <NavLink to="/terminos" style={getLinkStyle}>Terminos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
