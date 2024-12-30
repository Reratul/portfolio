import About from "./components/About"
import Landingpage from "./components/Landingpage"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Landingpage  />
      <About />
    </div>
  )
}

export default App