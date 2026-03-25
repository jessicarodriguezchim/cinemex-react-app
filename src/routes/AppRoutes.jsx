import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("../pages/Home"))
const Cartelera = lazy(() => import("../pages/Cartelera"))
const Detalle = lazy(() => import("../pages/Detalle"))
const Alimentos = lazy(() => import("../pages/Alimentos"))
const Otros = lazy(() => import("../pages/Otros"))
const Privacidad = lazy(() => import("../pages/Privacidad"))
const Terminos = lazy(() => import("../pages/Terminos"))

function RouteFallback() {
  return (
    <main
      style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ccc",
        padding: "24px"
      }}
      aria-busy="true"
      aria-live="polite"
    >
      Cargando vista...
    </main>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/pelicula/:id" element={<Detalle />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </Suspense>
  )
}
