function Header({ cambiarVista }) {
  return (
    <header
      style={{
        backgroundColor: "#E71235",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Logo */}
      <h1
        style={{
          color: "white",
          margin: 0,
          cursor: "pointer"
        }}
        onClick={() => cambiarVista("home")}
      >
        CINEMEX
      </h1>

      {/* Navegación */}
      <nav style={{ display: "flex", gap: "16px" }}>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => cambiarVista("home")}
        >
          Inicio
        </span>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => cambiarVista("cartelera")}
        >
          Cartelera
        </span>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => cambiarVista("alimentos")}
        >
          Alimentos
        </span>
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => cambiarVista("otros")}
        >
          Otros
        </span>
      </nav>
    </header>
  )
}

export default Header
