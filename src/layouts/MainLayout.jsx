import Carrousel from "../components/Carrousel"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function MainLayout({children}) {
  return (
    <div className="w-full bg-orange-200 min-h-screen">
     <NavBar/>
       <Carrousel/>
     <Footer/>
    </div>
  )
}
