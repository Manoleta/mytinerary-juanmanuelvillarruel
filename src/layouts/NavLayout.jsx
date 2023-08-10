import NavBar from "../components/NavBar"

export default function NavLayout({children}) {
  return (
    <div className="w-full bg-orange-200 min-h-screen">
     <NavBar/>
       {children}
     </div>
  )
}
