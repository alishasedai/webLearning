import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/card.jsx"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
         <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
