
 import { useEffect } from "react"
 

 
export const Navbar = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left — Logo 
          <a href="#home" className="flex items-center">
            <img
              src="/myPortfolio/Logo.jpeg"
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover" />
          </a>*/}
          <a href="#home" className="font-mono text-xl font-bold text-white" >
            AL<span className="text-green-500">JAZ</span>Y
          </a> 

          {/* Mobile Menu Icon */}
          <div
            className="flex items-center justify-center w-25 h-8 cursor-pointer z-40 md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>
          

          {/* Right — Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#project" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

         

        </div>
      </div>
    </nav>
  )
}
