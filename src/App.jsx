import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Nosotros from './components/Nosotros/Nosotros'
import Tratamientos from './components/Tratamientos/Tratamientos'
import Resenas from './components/Resenas/Resenas'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'
import Reveal from './components/Reveal/Reveal'
import JsonLd from './components/Seo/JsonLd'

function App() {
  return (
    <>
      <JsonLd />
      <a href="#contenido-principal" className="skip-link">
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <Nosotros />
        <Tratamientos />
        <Resenas />
        <Contacto />
      </main>
      <Reveal>
        <Footer />
      </Reveal>
      <WhatsAppFloat />
    </>
  )
}

export default App
