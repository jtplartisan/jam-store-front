import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./styles/Navbar.css";
import { navOptions } from "../common/data";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarItemClick = (label) => {
    setActiveOption(label);
  };

  return (
    <MDBNavbar
    className={`navbarCustom ${scrolling ? "scrolling" : ""}`}
    expand="lg"
   sticky={true}
    style={{
      backgroundColor: scrolling ? "#212529" : "rgb(34 37 42)",
      transition: "background-color 0.3s, min-height 0.3s",
      minHeight: scrolling ? "70px" : "100px",
    }}
  >
    <MDBContainer fluid>
      <MDBNavbarBrand className="text-white">Jamstore</MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setOpenBasic(!openBasic)}
      >
        <MDBIcon style={{ color: "white" , backgroundColor:'#0088cc', padding:'8px 14px',borderRadius:'4px' }} icon="bars" fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav
          style={{
            fontSize: "18px",
            fontWeight: "semi-bold",
            display: "flex",
            justifyContent: "center",
          }}
          className="mr-auto text-center mb-2 mb-lg-0"
        >
          {navOptions.map((option, index) => (
            <React.Fragment key={index}>
              {option.dropdown ? (
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link mx-3"
                      role="button"
                    >
                      {option.label}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {option.dropdown.map((item, i) => (
                        <MDBDropdownItem
                          key={i}
                          link={item.link}
                          disabled={item.disabled}
                          onClick={() => handleNavbarItemClick(item.label)}
                        >
                          <Link to={item.link}>{item.label}</Link>
                        </MDBDropdownItem>
                      ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              ) : (
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className={activeOption === option.label ? 'active' : ''}
                    aria-current="page"
                    href={option.link}
                    onClick={() => handleNavbarItemClick(option.label)}
                  >
                    {option.label}
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
            </React.Fragment>
          ))}
        </MDBNavbarNav>
        <MDBBtn className="loginBtn d-block mx-auto">Login</MDBBtn>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  );
};

export default AppNavbar;
