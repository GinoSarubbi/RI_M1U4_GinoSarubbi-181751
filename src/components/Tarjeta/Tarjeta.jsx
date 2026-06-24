import '@/components/Tarjeta/Tarjeta.css'

function Tarjeta({ nombre, profesion, imagen, descripcion, accion }) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={`Foto de ${nombre}, ${profesion}`} />
      <h2>{nombre}</h2>
      <h3>{profesion}</h3>
      <p>{descripcion}</p>
      <div className="tarjeta__accion">{accion}</div>
    </article>
  )
}

export default Tarjeta