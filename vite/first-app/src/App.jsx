import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card 1" description="Card 1 description"/>
        <Card title="Card 2" description="Card 2 description"/>
        <Card title="Card 3" description="Card 3 description"/>
        <Card title="Card 4" description="Card 4 description"/> 
      </div>
      <Footer />
    </>
  )
}

export default App
