import React from 'react';
import './styleHeader.css'
import { BsYoutube } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import{AiOutlineInstagram} from 'react-icons/ai'
function Header() {
  return (
    <div class="teste">
      <img src="/logotipo.png" alt="logotipo" class="w-12 h-12" />
      <div class="menu">
        <a href="/sobre" className="text">Sobre</a>
        <a href="/quem-somos" className="text">Quem Somos</a>
        <a href="/entrar" className="text">Entrar</a>
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


