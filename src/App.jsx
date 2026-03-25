import Header from "./components/Header"
import Flooter from "./components/Flooter"
import AppRoutes from "./routes/AppRoutes"
import "./App.css"

function App() {
  return (
    <div className="app-container" style={{ backgroundColor: "#1a1a1a" }}>
      <Header />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Flooter />
    </div>
  )
}

export default App
