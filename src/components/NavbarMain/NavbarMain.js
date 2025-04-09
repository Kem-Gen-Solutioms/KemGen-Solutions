import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import logo from './logo.png';

const NavbarMain = () => {
  const [activeNav, setActiveNav] = useState([true, false, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src={logo} alt="Mebiut Logo" style={{ width: '140px', height: 'auto', marginRight: '8px' }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(1);
                  closeNav();
                }}
              >
                Services
              </NavLink>

              <NavLink
                to="/careers"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(3);
                  closeNav();
                }}
              >
                Careers
              </NavLink>

              <NavLink
                to="/contactus"
                className={`${styles.nav_text} nav-link ${activeNav[4] ? styles.active : ""}`}
                style={{ marginTop: "8px", paddingLeft: '16px' }}
                onClick={() => {
                  handleActiveNav(4);
                  closeNav();
                }}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
