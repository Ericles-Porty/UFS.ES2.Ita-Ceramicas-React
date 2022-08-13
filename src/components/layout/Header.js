import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "../../img/logos/logo-transparent.webp";
import styles from "./Header.module.css";
import "./ProductsCategory.js";

function Header() {
  const [sideBar, setsideBar] = useState(false);
  const showsideBar = () => setsideBar(!sideBar);
  return (
    <header id={styles.header}>
      <Link to="/">
        <img
          id={styles.logo}
          src={logo}
          alt="Logo da ita cerâmicas since 2022"
        />
      </Link>
      <Link to="/" id={styles.logoTextContainer}>
        <h1>Ita Cerâmicas</h1>
      </Link>

      <nav>
        <ul
          id={!sideBar ? styles.navbarContainer : styles.navbarContainerActive}
        >
          <li className={!sideBar? styles.navbarItems: styles.navbarItemsActive}>
            <Link className={styles.links} to="/">
              Home
            </Link>
          </li>
          <li className={!sideBar? styles.navbarItems: styles.navbarItemsActive}>
            <Link className={styles.links} to="/">
              Produtos
            </Link>
          </li>
          <li className={!sideBar? styles.navbarItems: styles.navbarItemsActive}>
            <a className={styles.links} href="#contact">
              Sobre
            </a>
          </li>
          <li className={!sideBar? styles.navbarItems: styles.navbarItemsActive}>
            <a className={styles.links} href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={!sideBar ? styles.hamburgerNav : styles.hamburgerNavActive}
        onClick={showsideBar}
      >
        <Link to="#">
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </header>
  );
}
export default Header;
