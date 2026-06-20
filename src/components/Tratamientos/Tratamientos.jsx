import { tratamientos } from '../../data/content'
import Reveal from '../Reveal/Reveal'
import './Tratamientos.css'

function Tratamientos() {
  return (
    <section id="tratamientos" className="tratamientos">
      <div className="contenedor">
        <Reveal>
          <h2 className="tratamientos__titulo">{tratamientos.titulo}</h2>
        </Reveal>

        <ul className="tratamientos__lista">
          {tratamientos.items.map((item, index) => (
            <Reveal
              key={item.nombre}
              as="li"
              delay={index * 45}
              className="tratamiento-item"
            >
              <h3 className="tratamiento-item__nombre">{item.nombre}</h3>
              <p className="tratamiento-item__descripcion">{item.descripcion}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Tratamientos
