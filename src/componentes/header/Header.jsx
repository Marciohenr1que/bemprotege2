import React from 'react';
import './styleHeader.css'
import  { useState } from 'react'
import { BsYoutube } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
function Header() {
  const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    };
  return (
    <div className={`header ${showNav ? 'show-nav' : ''}`}>
            <div className="logo">
                <img className='logotipo' src="/logotipo.png" alt="logotipo" />
            </div>
            <div className={`menu ${showNav ? 'show' : ''}`}>
                <div className="menu-toggle" onClick={toggleNav}>
                    <BsList />
                </div>
                <a href="https://www.bemprotege.com" className="text">Sobre</a>
                <a href="https://www.bemprotege.com" className="text">Quem Somos</a>
                <a href="https://www.bemprotege.com" className="text">Entrar</a>
                <div className="icons">
                    <span><BsYoutube /></span>
                    <span><AiFillLinkedin /></span>
                    <span><AiOutlineInstagram /></span>
                </div>
            </div>
        </div>
    
  );
}

export default Header;


