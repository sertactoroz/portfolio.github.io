import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#skills",
    display: "Skills",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
      menuRef.current.firstChild.firstChild.classList.remove(`${classes.active}`);

    } else  {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
      menuRef.current.firstChild.firstChild.classList.add(`${classes.active}`);
    }
  };

  // neden add ve remove kullanıyoruz?
  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  // ne işe yarıyor?
  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>S</span>ertaç
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-line"></i> +90 535 516 70 03
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
