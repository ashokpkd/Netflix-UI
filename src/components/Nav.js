import React, { useState, useEffect } from 'react'
import './Nav.css'
function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else setShow(false)
    })
    return () => window.removeEventListener("scroll", () => { })
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
      alt="Netflix logo" />
    </div>
  )
}

export default Nav