import Header from "./componentes/Header/Header"
import Presentacion from "./componentes/Presentacion/Presentacion"
import Proyectos from "./componentes/Proyectos/Proyectos"
import Tecnologias from "./componentes/Tecnologias/Tecnologias"
import Contacto from "./componentes/Contacto/Contacto"

export default function App() {

  return (
    <>
      <Header />
      <main className="bg-orange-50 overflow-hidden">
        <Presentacion />
        <Proyectos />
        <Tecnologias />
        <Contacto />
      </main>
    </>
  )
}
