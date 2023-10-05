import React from 'react';
import './styleHeader.css'
import  { useState, useEffect } from 'react'
import { BsYoutube } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
function Header() {
    const [showNav, setShowNav] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    const toggleNav = () => {
        setIsMobile(window.innerWidth <= 768)
        setShowNav(!showNav)
    }
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      console.log("estou no celular:", isMobile)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])
    
  return (
   <div className="header">
      <div className="logo">
        <img className='logotipo' src="/logotipo.png" alt="logotipo" />
      </div>
      {isMobile ? (
        <div className={`menu-toggle ${showNav ? 'hidden' : ''}`} onClick={toggleNav}>
          <BsList />
        </div>
      ) : (
        <div className={`menu ${showNav ? 'show' : ''}`}>
          <a href="https://www.bemprotege.com" className="text">Sobre</a>
          <a href="https://www.bemprotege.com" className="text">Quem Somos</a>
          <a href="https://www.bemprotege.com" className="text">Entrar</a>
          <div className="icons">
            <span><BsYoutube /></span>
            <span><AiFillLinkedin /></span>
            <span><AiOutlineInstagram /></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;


