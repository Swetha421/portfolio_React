import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-100">
    <div className="bg-green-200 text-3xl ml-2">
        <p>Portfolio</p>
    </div>
    <div>
        <nav className="flex  float-right gap-16  mr-10 text-xl font-bold">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#qualification" className="hover:underline">Qualification</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </nav>
    </div>
    </div>
    </div>
  )
}

export default Navbar
