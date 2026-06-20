import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Nosotros from './components/Nosotros/Nosotros'
import Tratamientos from './components/Tratamientos/Tratamientos'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'
import Reveal from './components/Reveal/Reveal'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Tratamientos />
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
