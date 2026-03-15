const Flooter = () => {
    return (
      <footer style={{ 
        backgroundColor: "#1a1a1a", 
        color: "#fff", 
        padding: "40px 20px", 
        marginTop: "40px",
        borderTop: "2px solid #E71235" 
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "20px" 
        }}>
          
          {/* Sección de Contacto */}
          <div>
            <h4 style={{ color: "#F8C008" }}>Atención Telefónica</h4>
            <p>55 5257-6969</p>
          </div>
  
          {/* Sección de Legales */}
          <div>
            <h4 style={{ color: "#F8C008" }}>Sobre Cinemex</h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem", lineHeight: "1.8" }}>
              <li>Términos y Condiciones</li>
              <li>Aviso de Privacidad</li>
            </ul>
          </div>
  
          {/* Sección de Pago */}
          <div>
            <h4 style={{ color: "#F8C008" }}>Métodos de Pago</h4>
            <p>Aceptamos PayPal</p>
          </div>
  
        </div>
  
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "0.8rem", color: "#888" }}>
          <p>Derechos reservados © Cadena Méxicana de exhibición S.A de CV2013. Sitio desarrollado por Jessica_Rodriguez.com</p>
        </div>
      </footer>
    );
  };
  
  export default Flooter;