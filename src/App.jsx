import '@/App.css'
import Tarjeta from '@/components/Tarjeta/Tarjeta'
import ginoSarubbi from '@/assets/ginoSarubbi.webp'
import martinAnalista from '@/assets/martinAnalista.jpg'
import lauraDiseñadora from '@/assets/lauraDiseñadora.jpg'

function App() {
  return (
    <>
      <section id="center">
        <Tarjeta
          nombre="Gino Sarubbi"
          profesion="Programador PHP"
          imagen={ginoSarubbi}
          descripcion="Técnico del sistema SIU-Guaraní en la UBA. Experto en reportes y visualización de datos con JasperReports y PostgreSQL  ."
          accion="Ver perfil"
        />
        <Tarjeta
          nombre="Laura Méndez"
          profesion="Diseñadora UX"
          imagen={lauraDiseñadora}
          descripcion="Especialista en experiencia de usuario con foco en accesibilidad e interfaces intuitivas para sistemas de gestión académica."
          accion="Ver perfil"
        />
        <Tarjeta
          nombre="Martín Álvarez"
          profesion="Analista de Datos"
          imagen={martinAnalista}
          descripcion="Experto en reportes y visualización de datos con JasperReports y PostgreSQL. Trabaja en la optimización de consultas para sistemas."
          accion="Ver perfil"
        />
      </section>
    </>
  )
}

export default App