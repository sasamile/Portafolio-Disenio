import Fondo from "./components/Fondo"
import Footer from "./components/Footer"
import GentInTouch from "./components/GentInTouch"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Subcribe from "./components/Subcribe"


function App() {
  return (
    <>
    <Fondo>
      <Navbar/>
      <Header/>
      <main>
      <Skills/>
      <Projects/>
      <GentInTouch/>
      <Subcribe />
      </main>
      <Footer/>
    </Fondo>
    </>
  )
}

export default App