"use client";
import { FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import "./styles.scss";
import Image from "next/image";
import logo from "../../../../public/Pramos.png";
import bemVindo from "../../../../public/bem-vindo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="container container-flex">
        <div className="header-logo">
          <Image
            width={187}
            height={35}
            src={logo}
            alt="Logo principal do site"
          />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`header-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Sobre mim</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-apresentacao">
        <div className="container container-flex">
          <div className="header-apresentacao-text">
            <Image
              width={137}
              height={42}
              src={bemVindo}
              alt="Imagem de Bem-vindo"
            />
            <h1>
              Tenho experiecia <span>em desenvolvimento web</span>
            </h1>
            <p>
              Prazer! Me chamo Guilherme, sou um desenvolvedor web criativo.
              <span>
                Tenho ajudado empresas a resolverem seus problemas com meu
              </span>
              <span>desenvolvimento e layouts há mais de 5 anos.</span>
            </p>
            <div className="header-rede-social">
              <span>Siga nas redes sociais</span>
              <span className="header-rede-social-line"></span>
              <div className="header-rede-social-img">
                <a
                  href="https://www.linkedin.com/in/guihpramos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
