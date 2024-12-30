import Landingpage from "./components/Landingpage"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Landingpage  />
    </div>
  )
}

export default App